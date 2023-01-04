---
layout: post
title:  "Metrics for Information Retrieval"
date:   2023-01-04 15:00:00 +0200
categories: blog
---

In the past year I have built a neural search system on top of the awesome [Haystack](https://github.com/deepset-ai/haystack) project. One of the tasks was to understand how well different models or algorithms perform for our corpus. Therefore I needed to understand the metrics that are commonly used in information retrieval tasks. I could not find one source that described them neatly, therefor I created this post. The metrics explained in this post are the ones that the [BEIR](https://github.com/beir-cellar/beir) benchmark currently reports:

- [NDCG@k - Normalized Discounted Cumulative Gain at k](#ndcgk---normalized-discounted-cumulative-gain-at-k)
- [MAP@k - Mean average precision at k](#mapk---mean-average-precision-at-k)
- [Precision@k](#precisionk)
- [Recall@k](#recallk)
- [R\_cap@k - Capped Recall](#r_capk---capped-recall)
- [MRR@k - Mean Reciprocal Rank at k](#mrrk---mean-reciprocal-rank-at-k)


These metrics calculate performance for a ranking task. Ranking is the more general task of search systems. Given:
- a `corpus` of documents or passages
- a set of `queries`
- a set of relevance scores, which define for each query how relevant each document is, in the simplest case by marking them with 0 or 1.

The system should retrieve the most relevant documents for each query and show them at the top rank. 

Of course the system does not know the relevance scores and has to calculate them on its own. To calculate the metrics though you need them. We used a feedback system, where users could vote on search results if they are relevant for their search or not.

## Example
I will use the following example to illustrate the metrics.

### Corpus:  

```
Document 1: "How to train a cat"
Document 2: "How to train a dog"
Document 3: "How to train a parrot"
Document 4: "How to train a hamster"
```
### Queries:
```
Query 1: "train cat"
Query 2: "train dog"
Query 3: "train parrot"
```

### Relevance scores:
Let us also assume, the the search system returned the documents in this order for each query.
```
Query 1, Document 1: 1.0 (maximum relevance)
Query 1, Document 2: 0.5
Query 1, Document 3: 0.3
Query 1, Document 4: 0.1

Query 2, Document 1: 0.7
Query 2, Document 2: 1.0 (maximum relevance)
Query 2, Document 3: 0.2
Query 2, Document 4: 0.1

Query 3, Document 1: 0.4
Query 3, Document 2: 0.2
Query 3, Document 3: 1.0 (maximum relevance)
Query 3, Document 4: 0.1
```

## NDCG@k - Normalized Discounted Cumulative Gain at k

Normalized Discounted Cumulative Gain at k (NDCG@k) is a metric used to evaluate the performance of a ranking model. NDCG@k measures the usefulness of the top k items in the ranking, taking into account both the relevance of the items and their order in the ranking.

To calculate NDCG@k, the discounted cumulative gain (DCG) of the top k items in the ranking is first calculated. The DCG is a measure of the relevance of the items in the ranking, where higher relevance scores are given more weight. The DCG value is calculated by summing the product of the relevance of each item and a discount factor that decreases as the rank of the item increases.

Next, the maximum possible discounted cumulative gain (IDCG) of the top k items is calculated. This is the DCG of the ideal ranking, where the most relevant items appear at the top.

Finally, the NDCG@k score is calculated by dividing the DCG of the top k items by the IDCG of the top k items. The NDCG@k score ranges from 0 to 1, with a higher score indicating a more useful ranking.

### Formula
```
NDCG@k = DCG@k / IDCG@k
```
Where:

- `DCG@k` is the discounted cumulative gain for the top k items in the ranking
- `IDCG@k` is the maximum possible discounted cumulative gain for the top k items

The formula for DCG@k is:
```
DCG@k = ∑ rel_i * (1 / log_2(i+1)) for i = 1 to k
```

Where:

`rel_i` is the relevance of the item at rank i
`k` is the number of items in the top k portion of the ranking

The formula for IDCG@k is:

```
IDCG@k = ∑ max_rel_i * (1 / log_2(i+1)) for i = 1 to k
```

Where:

- `max_rel_i` is the maximum relevance among all items at rank i


### Example:
Here is an example of how NDCG@k can be calculated for the corpus, set of queries, and set of relevance scores from above:

Let's say we want to calculate NDCG@2 for each query. First, we need to calculate the DCG@2 and IDCG@2 values for each query.

For Query 1:
```
DCG@2 = 1.0 + 0.5 * (1 / log_2(3)) = 1.0 + 0.5 * (1 / 1.585) = 1.32
IDCG@2 = 1.0 + 0.5 * (1 / log_2(3)) = 1.0 + 0.5 * (1 / 1.585) = 1.32
NDCG@2 = DCG@2 / IDCG@2 = 1.32 / 1.32 = 1.0
```
For Query 2:
```
DCG@2 = 1.0 + 0.7 * (1 / log_2(3)) = 1.0 + 0.7 * (1 / 1.585) = 1.45
IDCG@2 = 1.0 + 1.0 * (1 / log_2(3)) = 1.0 + 1.0 * (1 / 1.585) = 1.62
NDCG@2 = DCG@2 / IDCG@2 = 1.45 / 1.62 = 0.89
```
For Query 3:
```
DCG@2 = 1.0 + 0.4 * (1 / log_2(3)) = 1.0 + 0.4 * (1 / 1.585) = 1.25
IDCG@2 = 1.0 + 1.0 * (1 / log_2(3)) = 1.0 + 1.0 * (1 / 1.585) = 1.62
NDCG@2 = DCG@2 / IDCG@2 = 1.25 / 1.62 = 0.77
```
In this example, the ranking for Query 1 has an NDCG@2 score of 1.0, which means it is a perfect ranking. The ranking for Query 2 has an NDCG@2 score of 0.89, which means it is a good ranking but not perfect. The ranking for Query 3 has an NDCG@2 score of 0.77, which means it is a lower quality ranking.

## MAP@k - Mean average precision at k

Mean Average Precision at k (MAP@k) is a metric used to evaluate the performance of a ranking model, particularly in information retrieval tasks such as search engines. It measures the average precision of the top k items in the ranking, taking into account both the relevance of the items and their order in the ranking.

Precision is a measure of the proportion of relevant items in the ranking. For example, if a ranking contains 4 items and 2 of them are relevant, the precision of the ranking is 0.5.

To calculate MAP@k, the precision of the top k items in the ranking is first calculated for each query. The precision is calculated as the number of relevant items in the top k portion of the ranking divided by k. Then, the average precision is calculated by taking the mean of the precision values across all queries.

The formula for MAP@k is:

```
MAP@k = 1/Q * ∑ (Precision@k of query q) for q = 1 to Q
```

Where:

- `Q` is the number of queries
- `Precision@k of query q` is the precision of the top k items in the ranking for query q

The MAP@k score ranges from 0 to 1, with a higher score indicating a more useful ranking.

### Example
Let's say we want to calculate MAP@2 for each query, using a relevance threshold of 0.5. First, we need to calculate the precision@2 for each query.

For Query 1:
```
precision@2 = (number of relevant items in top 2) / 2
= (2 relevant items) / 2
= 1.0
```
For Query 2:
```
precision@2 = (number of relevant items in top 2) / 2
= (1 relevant item) / 2
= 0.5
```
For Query 3:
```
precision@2 = (number of relevant items in top 2) / 2
= (0 relevant item) / 2
= 0.0
```
Then, the MAP@2 score is calculated as the mean of the precision@2 values:

```
MAP@2 = 1/3 * (1.0 + 0.5 + 0.0)
      = 1/3 * 1.5
      = 0.5
```

## Precision@k

Precision@k measures the proportion of relevant items in the top k items of the ranking, relative to the total number of items in the ranking.

The Precision@k score is calculated by dividing the number of relevant items in the top k portion of the ranking by k. The Precision@k score ranges from 0 to 1, with a higher score indicating a more useful ranking.

The formula for Precision@k is:

```
Precision@k = (number of relevant items in top k) / k
```

For example, suppose we have a corpus containing 10 documents, and we want to calculate the Precision@5 score for a given query. If the top 5 documents in the ranking contain 3 relevant documents, the Precision@5 score would be calculated as follows:

```
Precision@5 = (number of relevant items in top 5) / 5
            = 3 / 5
            = 0.6
```
In this example, the Precision@5 score is 0.6, which means that 60% of the top 5 documents in the ranking are relevant.

The Precision@k metric is defined even when there are no relevant documents in the corpus, whereas the Recall@k metric is not defined in this case. This makes Precision@k a useful evaluation metric when the number of relevant documents in the corpus is small or when the relevance threshold is set very high.

### Example

Let's say we want to calculate Precision@2 for each query, using a relevance threshold of 0.5. First, we need to count the number of relevant items in the top 2 items of the ranking for each query.

For Query 1:
```
number of relevant items in top 2 = 1
Precision@2 = (number of relevant items in top 2) / 2
= 2 / 2
= 1.0
```

For Query 2:
```
number of relevant items in top 2 = 1
Precision@2 = (number of relevant items in top 2) / 2
= 2 / 2
= 1.0
```

For Query 3:

```
number of relevant items in top 2 = 0
Precision@2 = (number of relevant items in top 2) / 2
= 0 / 2
= 0.0
```

In this example, the Precision@2 scores are 0.5, 0.5, and 0.0 for Query 1, Query 2, and Query 3, respectively. This means that 50% of the top 2 documents in the ranking are relevant for Query 1 and Query 2, and none of the top 2 documents in the ranking are relevant for Query 3.


## Recall@k

The Recall@k score is calculated by dividing the number of relevant items in the top k portion of the ranking by the total number of relevant items **in the corpus**. The Recall@k score ranges from 0 to 1, with a higher score indicating a more useful ranking.

The formula for Recall@k is:

```
Recall@k = (number of relevant items in top k) / (total number of relevant items)
```

For example, suppose we have a corpus containing 10 documents, and we want to calculate the Recall@5 score for a given query. If the top 5 documents in the ranking contain 3 relevant documents and there are a total of 5 relevant documents in the corpus, the Recall@5 score would be calculated as follows:

```
Recall@5 = (number of relevant items in top 5) / (total number of relevant items)
         = 3 / 5
         = 0.6
```
In this example, the Recall@5 score is 0.6, which means that 60% of the relevant documents in the corpus are included in the top 5 documents of the ranking.

### Example
Let's say we want to calculate Recall@2 for each query from the top, using a relevance threshold of 0.5. First, we need to count the number of relevant items in the top 2 items of the ranking for each query, and the total number of relevant items in the corpus.

For Query 1:
```
number of relevant items in top 2 = 1
total number of relevant items = 2
Recall@2 = (number of relevant items in top 2) / (total number of relevant items)
= 1 / 2
= 0.5
```

For Query 2:
```
number of relevant items in top 2 = 1
total number of relevant items = 1
Recall@2 = (number of relevant items in top 2) / (total number of relevant items)
= 1 / 1
= 1.0
```
For Query 3:
```
number of relevant items in top 2 = 0
total number of relevant items = 0
Recall@2 = (number of relevant items in top 2) / (total number of relevant items)
= 0 / 0
= NaN
```

If the total number of relevant documents in the corpus is 0, the Recall@k score is not defined. This can happen when there are no relevant documents in the corpus for a given query, or when the relevance threshold is set too high such that no documents in the corpus meet the threshold.

## R_cap@k - Capped Recall

The R_cap@k metric is a variant of the Recall@k metric. It measures the proportion of relevant items in the top k items of the ranking, relative to the total number of relevant items in the corpus, but caps the total number of relevant documents to k.

The formula for R_cap@k is:

```
R_cap@k = (number of relevant items in top k) / min(k, total number of relevant items)
```

Measuring Recall@k can be counterintuitive, if a high number of relevant documents (> k) are present within a dataset. For example, consider a hypothetical dataset with 500 relevant documents for a query. Retrieving all relevant documents would produce a maximum R@100 score = 0.2, which is quite low and unintuitive. To avoid this we cap the recall score (R_cap@k) at k for datasets if the number of relevant documents for a query greater than k. [^beir_paper]

### Example:

Suppose we have a corpus containing 10 documents, and we want to calculate the Recall@5 and R_cap@5 scores for a given query. If the top 10 documents in the ranking are ranked as follows:

```
Rank 1: Relevant document
Rank 2: Relevant document
Rank 3: Relevant document
Rank 4: Non-relevant document
Rank 5: Non-relevant document
Rank 6: Relevant document
Rank 7: Relevant document
Rank 8: Relevant document
Rank 9: Non-relevant document
Rank 10: Relevant document
```

And if there are a total of 7 relevant documents in the corpus, the Recall@5 and R_cap@5 scores would be calculated as follows:

```
Recall@5 = (number of relevant items in top 5) / (total number of relevant items)
         = 3 / 8
         = 0.38

R_cap@5 = (number of relevant items in top 5) / min(k, total number of relevant items)
        = 3 / min(5,8)
        = 3 / 5
        = 0.60
```

## MRR@k - Mean Reciprocal Rank at k

Mean Reciprocal Rank (MRR@k) measures the average reciprocal rank of the first relevant item in the ranking, where the reciprocal rank of an item is defined as `1/rank`.

The MRR@k score is calculated by summing the reciprocal ranks of the first relevant item in the top k items of the ranking for each query, and dividing the sum by the number of queries. The MRR@k score ranges from 0 to 1, with a higher score indicating a more useful ranking.

The formula for MRR@k is:

```
MRR@k = sum(1/rank of first relevant item in top k) / number of queries
```

For example, suppose we have a corpus containing 10 documents, and we want to calculate the MRR@5 score for a set of queries. If the top 5 documents in the ranking for the first query contain the first relevant document at rank 3, and the top 5 documents in the ranking for the second query contain the first relevant document at rank 1, the MRR@5 score would be calculated as follows:

```
MRR@5 = (1/3 + 1/1) / 2
      = (0.33 + 1.00) / 2
      = 1.33 / 2
      = 0.67
```

In this example, the MRR@5 score is 0.67, which means that on average, the first relevant document in the ranking is at rank 3 for the first query and rank 1 for the second query.

### Example
Let us again assume the threshold for a document being relevant is a score of greater or equal than 0.5.

- For Query 1, the first relevant document (Document 1) is at rank 1, so the reciprocal rank is 1/1 = 1.0.
- For Query 2, the first relevant document (Document 2) is at rank 1, so the reciprocal rank is 1/1 = 1.0.
- For Query 3, the first relevant document (Document 3) is at rank 3, so the reciprocal rank is 1/3 = 0.33.

The MRR@2 score is then calculated as the mean of the reciprocal ranks:

```
MRR@2 = (1.0 + 1.0 + 0.33) / 3
      = 2.33 / 3
      = 0.78
```

## References
[^beir_paper]: [BEIR: A Heterogenous Benchmark for Zero-shot Evaluation of Information Retrieval Models](https://arxiv.org/abs/2104.08663)