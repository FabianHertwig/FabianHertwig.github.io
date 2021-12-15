---
layout: post
title:  "Use the Virtuous Circle of AI to build awesome Data Products"
date:   2021-10-23 17:24:07 +0200
categories: blog
---
A useful product attracts more users which generate data that can be used to improve the product. That is the concept of the virtuous circle of AI. And I have referenced it a lot of times in the last couple of months when I was consulting clients who wanted to use AI in their products. So in this post I want to explain the concept, show some examples of companies implementing the concept and explaining how to get started using it.

![the virtuous cycle](/resources/virtuous_cycle.png)

# The Virtuous Circle of AI

The first time I heard of the virtuous cycle of AI was in this presentation from Andrew Ng, where he briefly describes it. Short enough so that you understand it, but too short to understand the significance of it.

<iframe width="720" height="405" src="https://www.youtube.com/embed/NKpuX_yzdYs?start=870" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


The circle states that a useful product will attract users. These users generate data and that data can be used to improve the product. That is a positive feedback loop and if you run that for some time, you have such a valuable dataset, that your product evolved to be the best of its kind. Eventually almost all possible users will be attracted to your product. Then it becomes very hard for others to reproduce your product or compete with you. Because it is hard for them to attract your users so that they create the needed data. To explain that further, let us look at some companies that implement the virtuous circle.

# The Tesla Data Engine

In my opinion one company that implements the circle top-notch is Tesla. They probably run quite a few virtuous circles with their sub products [^data_driven_safety] [^tesla_ai], the most famous one being the Tesla Autopilot. Tesla's Autopilot is self driving car features, which allows the car to steer itself. Right now it needs constant supervision from the driver, but the vision is that the car can drive completely on its own.

Tesla builds electric cars, which might be a useful product by itself to many people. To make the autonomous driving features more useful, Tesla integrated the Intel Mobile Eye system into their early cars before building their own self driving car system. That system powered lane keeping and traffic aware cruise control [^tesla_hw_1]. So Tesla has a useful product, which attracts users. Because there are millions of Tesla cars driving around, Tesla can effectively use the fleet to collect data about the Autopilot system. For example, they once observed the problem, that bikes attached to the back of a car get recognized as bikes traveling along the street, but should be recognized as a part of the car. So they issued commands to the fleet, to collect images of bikes on cars. The fleet sends back these images or video sequences to Tesla, they can then label these images correctly and use this dataset to retrain their self driving Neural Networks, e.g. improve their product. Tesla calls this system the Data Engine and presented it for the first time at the Tesla Autonomy Day, see the video below from 2:05:18 to 2:12:50. (If you want to also get a good explanation of how Neural Networks work, then start at: 1:52:00).

<iframe width="720" height="405" src="https://www.youtube.com/embed/Ucp0TTmvqOE?start=7518" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Tesla built the data feedback loop very intentionally into the cars. The current Autopilot Hardware allows Tesla to run neural networks in shadow mode, where they are not used to control the car but to observe the world or the system in control. Tesla uses shadow mode to deploy triggers on the fleet. For example to send back video sequences where bikes are attached to the car or when the driver had to intervene [^triggers]. Or they deploy the next version of a predictor in shadow mode and send back all the predictions that turned out to be wrong, for example when a model predicted that another car would cut into the line, but it did not.

# Spotify, Netflix, YouTube, TikTok and other recommenders

Streaming services like Spotify, Netflix, YouTube, and TikTok made the virtuous cycle their whole business model. Because their main business is not streaming media, but recommending media. If they were not able to recommend you the next good song to listen to, or series or video to watch, you would probably move to another streaming service that is able to do that. And to be able to recommend every user what they probably like, they need a lot of data of the preferences of other users. 

TikTok takes being a recommender to the extreme. TikTok is a platform where users can upload short videos and remix them with music or other user's videos. When you open the app, you land on the *#ForYou* screen and a video that TikTok recommends you starts playing. The video will play on repeat until you scroll down to jump to the next video. If you double tap the screen you like the video. Over time TikTok will learn what interests you based on videos you liked previously, watched until the end or repeatedly or skipped. From time to time the app will throw in a video that is not in your interests either to challenge what they know about your interests or to get a sense of what is interesting to a broader user range[^tiktok_for_you]. So TikTok is continuously running the virtuous cycle of AI. The App is useful, because you can endlessly watch videos that entertain you and therefore it attracts more users. These users interact with videos and TikTok can learn which videos fit into which interest group and improve their recommendation engine. This improves the product as users get to see even more entertaining videos and the loop continues.

<!-- 
- Netflix A/B tests, cover selection: https://netflixtechblog.com/artwork-personalization-c589f074ad76
- Netflix  data driven scripts. Maybe: https://www.youtube.com/watch?v=qXo9jTxfqJ8&t=2s
- Netflix greenlighting house of cards
-->


# How to get started 

There are multiple entry points into the circle:

When you already have **users** that use your product, then you simply need to become data driven. That means inform your decisions with data, for example what features to develop or remove and in which direction to move on. Bernard Marr tells in his book Big Data in Practice[^_big_data_in_practice] the wonderful story of a butcher becoming data driven because of the threat of a supermarket chain that opened nearby. They installed cheap small sensors near the display window, sandwich board and inside the shop. These sensors are able to pickup smartphone signals and can therefore measure how many people stopped at the window, board and hopefully went into the shop. That allowed them to run tests on what to display in their window and what to write on the board and measure how that affects customer numbers. **Think about that, a butcher running A/B tests!** They found out that a recipe fitting the current time of year was more effective in attracting customers than a message advertising a cheap price. They also found out that a lot of foot traffic passed their shop in the late evening, when their shop was long closed, because there were two pubs nearby. Opening the shop in the late evening to sell sandwiches to the pub dwellers turned out to be a lucrative additional business.

Buffer is a company that allows you to prepare Twitter posts and schedule them to be posted in the future. Even before they had built the **product** and it was merely a good idea, they started the virtuous cycle. **They created to most minimum valuable product you can imagine and tested the value of their idea**. 

![Buffer MVP](https://buffer.com/resources/content/images/4dLL/Buffer-MVP.png) 

<sub>Source: [Idea to Paying Customers in 7 Weeks: How We Did It](https://buffer.com/resources/idea-to-paying-customers-in-7-weeks-how-we-did-it/)</sub>

They created a landing page which described the the product in a few lines of text. Next to it was a button `Plans and Pricing`. When visitors clicked the button they landed on the next page that stated: *Hello! You caught us before we are ready. If you'd like us to send you a reminder once we are ready put your email in below*[^buffer_idea_to_product]. From the number of people that clicked the `Plans and Pricing` button and left their E-Mail, they got a pretty good idea of how useful the product would be to users. To be able to measure the value of their idea, they added a new second page after the `Plans and Pricing` button that actually showed some plans and pricing. When visitors then clicked on one of the plans, then they got to the page where they can leave their e-mail.

To get back to a example where AI is actually the key component, let us look at AMP Robotics who started with a unique **dataset**.


<!-- 
From a dataset, collect a unique dataset to get started: Dumpster diving for trash sorting robots. Trash robots: @25min https://open.spotify.com/episode/2FzwkL7p2EJWomncgkVKVI?si=SZwqxsS_SheUX8O3yeqBRA&t=1502&dl_branch=1
-->

# Conclusion

----
## References
[^data_driven_safety]: [YouTube: Tesla Crash Lab Data-Driven Safety](https://www.youtube.com/watch?v=9KR2N_Q8ep8)
[^tesla_ai]: [YouTube: Andrej Karpathy - AI for Full-Self Driving at Tesla](https://youtu.be/hx7BXih7zx8?t=423)
[^tesla_hw_1]: [Wikipedia: Tesla Autopilot Hardware 1](https://en.wikipedia.org/wiki/Tesla_Autopilot#Hardware_1)
[^triggers]: [YouTube: [CVPR'21 WAD] Keynote - Andrej Karpathy, Tesla](https://youtu.be/g6bOwQdCJrc?t=890)
[^tiktok_for_you]: [How TikTok recommends videos #ForYou](https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you)
[^_big_data_in_practice]: [Bernard Marr: Big Data In Practice](https://bernardmarr.com/books/)
[^buffer_idea_to_product]: [Idea to Paying Customers in 7 Weeks: How We Did It](https://buffer.com/resources/idea-to-paying-customers-in-7-weeks-how-we-did-it/)