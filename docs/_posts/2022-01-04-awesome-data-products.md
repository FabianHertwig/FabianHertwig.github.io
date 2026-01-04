---
title: "Feedback Loops are the Key Concept to build awesome Data Products"
date: 2022-01-04 15:00:00 +0200
description: "How Tesla, Netflix, TikTok, and even a local butcher use the virtuous circle of AI—where users generate data that improves the product, creating an unstoppable competitive advantage."
categories:
  - blog
tags:
  - Machine Learning
  - Data Engine
  - Data Products
---

A useful product attracts more users which generate data that can be used to improve the product. That is the concept of the virtuous circle of AI. Tesla uses it to improve the Autopilot, Netflix to show the right movies to each user and even startups to validate their idea or to train robots to sort trash. In this post I will explain the concept and show how these companies implement it.

# The Virtuous Circle of AI

![the virtuous cycle](/assets/images/virtuous_cycle.png)

The first time I heard of the virtuous cycle of AI was in this presentation from Andrew Ng, where he briefly describes it. Short enough so that you understand it, but too short to understand the significance of it. If you like, watch it from 14:40 to 16:40.

{% include video id="NKpuX_yzdYs?start=870" provider="youtube" %}

The circle states that a useful product will attract users. These users generate data and that data can be used to improve the product. That is a positive feedback loop and if you run that for some time, you have such valuable data, that your product evolved to be the best of its kind. It becomes very hard for others to reproduce your product or compete with you. Because if your product is so far ahead then it is hard for them to attract new users so that they create the needed data. To explain that further, let us look at some companies that implement the virtuous circle.

# The Tesla Data Engine

The company that implements the circle top-notch is Tesla. The most famous one is the Tesla Autopilot[^tesla_ai] and there are even more circles, for example the data driven safety program[^data_driven_safety]. Tesla's Autopilot is self driving car features, which allows the car to steer itself. Right now it needs constant supervision from the driver, but the vision is that the car can drive completely on its own.

Tesla builds electric cars, which is a useful product by itself to many people. To make the autonomous driving features useful from the beginning, Tesla integrated the Intel Mobile Eye system into their early cars before building their own self driving car system. That system powered lane keeping and traffic aware cruise control[^tesla_hw_1]. So Tesla has a useful product, which attracts users. Because there are millions of Tesla cars driving around, Tesla can effectively use the fleet to collect data about the Autopilot system. For example, they once observed the problem, that bikes attached to the back of a car get recognized as bikes traveling along the street, but should be recognized as a part of the car. So they issued commands to the fleet to collect images of bikes on cars. The fleet sends these images back to Tesla, they can then label these images correctly and use this dataset to retrain their self driving Neural Networks, e.g. improve their product. Tesla calls this system the Data Engine and presented it for the first time at the Tesla Autonomy Day, see the video below from 2:05:18 to 2:12:50. If you want to also get a good explanation of how Neural Networks work, then start at 1:52:00.

{% include video id="Ucp0TTmvqOE?start=7518" provider="youtube" %}

Tesla built the data feedback loop very intentionally into the cars. The Autopilot Hardware has additional computational capacity which allows Tesla to run Neural Networks in shadow mode, where they run in parallel to the networks in control, but are just observing the world or the system that is in  control. Tesla also uses shadow mode to deploy triggers on the fleet, for example to send back video sequences where bikes are attached to the car or when the driver had to intervene[^triggers]. Or they deploy the next version of a Neural Network in shadow mode and send back all the predictions that turned out to be wrong, for example when a model predicted that another car would cut into the line, but it did not.

# Spotify, Netflix, YouTube, TikTok and other Recommenders

Streaming services like Spotify, Netflix, YouTube, and TikTok made the virtuous cycle their whole business model. Because their main business is not streaming media, but recommending media. If they were not able to recommend you the next good song to listen to, or series or video to watch, you would probably move to another streaming service that is able to do that. And to be able to recommend every user what they probably like, they use the data of the preferences of other users. 

TikTok takes being a recommender to the extreme. TikTok is a platform where users can upload short videos and remix them with music or other user's videos. When you open the app, you land on the *#ForYou* screen and a video that TikTok recommends you starts playing. The video will play on repeat until you scroll down to jump to the next video. If you double tap the screen you like the video. Over time TikTok will learn what interests you based on videos you liked previously, watched until the end or repeatedly or skipped. From time to time the app will throw in a video that is not in your interests either to challenge what they know about your interests or to get a sense of what is interesting to a broader user range[^tiktok_for_you]. So TikTok is continuously running the virtuous cycle of AI. The App is useful, because you can endlessly watch videos that entertain you and therefore it attracts more users. These users interact with videos and TikTok can learn which videos fit into which interest group and improve their recommendation engine. This improves the product as users get to see even more entertaining videos and the loop continues.

![Netflix Mainpage](/assets/images/netflix.png)

When a user opens the Netflix main page and does not find anything intriguing in 90 seconds, she will loose interest and move on to do something else[^netflix_ab_testing]. If so Netflix has failed to deliver: A user wanted to watch something, but could not find anything and left. That is why Netflix personalizes the complete homepage to the user. On the page are rows of grouped videos, for example recommendations based on previously watched movies or genres. Inside the groups the videos are ranked by how interesting a video might be to the specific user[^netflix_homepage]. Netflix even adapts the cover image of each video to the user[^netflix_artwork]. As an image says more than a thousands words the cover image is the most important evidence for a user to decide if a movie or show might be interesting to her. Therefore the image should show which of the user interests the movie could satisfy: Is there an actor that the user likes, is there an action loaded chasing scene in it, a romantic relationship or is it about a mysterious sighting? To select a good image, Netflix sources multiple cover artworks that show different aspects of the movie. A system then learns which of these artworks is a good choice for each user by showing the different artworks to the user base and observing which image/movie/user combination led the users to select the movie and watch it. Before Netflix personalized the artworks, they simply showed the same artwork to every user. To make sure, that the new system leads to a better user experience, Netflix ran A/B test. In an A/B test the users a split up into groups. One is the control group which gets to see what the current system produces, the static artworks. Then there are also one or more experimental groups, where the users get to see the new system, the personalized artworks. Then different metrics are tracked for each group to see if the new system improves the user experience. The metrics could be the streaming hours or user retention. Netflix found that personalized artworks are a meaningful improvement and rolled it out to the whole user base.

<!-- 
- Netflix greenlighting house of cards
-->


# A Butcher Running Tests on Customers

When you want to use the virtuous circle and you already have **users** that use your product, then you simply need to become data driven. That means inform your decisions with data, for example what features to develop or remove and in which direction to move on. Bernard Marr tells in his book Big Data in Practice[^_big_data_in_practice] the wonderful story of a butcher becoming data driven because of the threat of a supermarket chain that opened nearby. They installed cheap small sensors near the display window, sandwich board and inside the shop. These sensors are able to pickup smartphone signals and can therefore measure how many people stopped at the window, board and hopefully went into the shop. That allowed them to run tests on what to display in their window and what to write on the board and measure how that affects customer numbers. **Think about that, a butcher running A/B tests!** They found out that a recipe fitting the current time of year was more effective in attracting customers than a message advertising a cheap price. They also found out that a lot of foot traffic passed their shop in the late evening, when their shop was long closed, because there were two pubs nearby. Opening the shop in the late evening to sell sandwiches to the pub dwellers turned out to be a lucrative additional business.

# Buffer Testing the Product Idea

Buffer is a company that allows you to prepare Twitter posts and schedule them to be posted in the future. Even before they had built the **product** and it was merely a good idea, they started the virtuous cycle. **They created to most minimum valuable product you can imagine and tested the value of their idea**. 

![Buffer MVP](https://buffer.com/resources/content/images/4dLL/Buffer-MVP.png) 

<sub>Source: [Idea to Paying Customers in 7 Weeks: How We Did It](https://buffer.com/resources/idea-to-paying-customers-in-7-weeks-how-we-did-it/)</sub>

They created a landing page which described the the product in a few lines of text. Next to it was a button `Plans and Pricing`. When visitors clicked the button they landed on the next page that stated: *Hello! You caught us before we are ready. If you'd like us to send you a reminder once we are ready put your email in below*[^buffer_idea_to_product]. From the number of people that clicked the `Plans and Pricing` button and left their E-Mail, they got a pretty good idea of how useful the product would be to users. To be able to measure the value of their idea, they added a new second page after the `Plans and Pricing` button that actually showed some plans and pricing. When visitors then clicked on one of the plans, then they got to the page where they can leave their E-mail. This is probably a better example for *Lean Startup* than for the virtuous cycle of AI, but I wanted to include it to show with how little you can start collecting data. Here, Buffer does not even have a product or users, but just the idea that there might be a product in the future is already useful to some people. And if they click through your landing page they give you data on which you can base your decision.

# Collecting Data to be able to Train Robots

To get back to a example where AI is actually the key component, let us look at AMP Robotics who started with a unique **dataset**. They build robots that can sort trash to revolutionize recycling. Therefore a computer vision system must be able to detect which kind of trash is on a conveyor belt so  the robot arm can pick it up and throw it in the right bin. 

{% include video id="342840855" provider="vimeo" %}

When they started they setup a small demo conveyor belt at their lab. The CEO went dumpster diving on the weekends to find an assortment of bottles and cans for their dataset[^amp_robotics_spotify]. Once the janitor even thought they threw a big party and was about to throw away all the trash that they collected, luckily he called in first. With the small dataset and the lab setup they were able to built a compelling demo and got to talk to recycling site operators. But they knew that the demo only really worked in their lab setup and would struggle under different lighting conditions and trash types. On site, they were allowed to record more video of the actual conveyor belts that transport trash which they annotated to improve their system. Once they felt ready to put a trash sorting robot arm on site they purposefully set it up somewhere, where it could not create a lot of harm, as they knew they need to collect and label more data before their robot could detect the different types of trash accurate enough to be valuable. Their robots are connected to their cloud infrastructure and send back images. These get annotated, added to the dataset and new computer vision models are trained, that the robots can then download and use. This is how AMP Robotics runs the virtuous cycle of AI and continuously improves the system over time.


# Conclusion

The virtuous circle of AI: A useful product attracts more users which generate data that can be used to improve the product. Tesla uses it with their data engine to collect data from the fleet to train new versions of Autopilot Neural Networks. TikTok uses it to learn which videos are most entertaining to each user. Netflix improves the user experience by showing cover art that explain to users if a movie is interesting to them. A butcher used it to find out how to contact users in and around their shop. Buffer started without users, data or a product but tested the product idea. And at last the CEO of a robotics company goes dumpster diving to collect assets for their dataset. These were just a few examples, but I hope they showed a good range of applications and entry points.

If you want to implement to virtuous circle then think about how you could learn from users, how you can test product improvements, what is your dataset and can you improve it from user interactions.

----
## References
[^data_driven_safety]: [YouTube: Tesla Crash Lab Data-Driven Safety](https://www.youtube.com/watch?v=9KR2N_Q8ep8)
[^tesla_ai]: [YouTube: Andrej Karpathy - AI for Full-Self Driving at Tesla](https://youtu.be/hx7BXih7zx8?t=423)
[^tesla_hw_1]: [Wikipedia: Tesla Autopilot Hardware 1](https://en.wikipedia.org/wiki/Tesla_Autopilot#Hardware_1)
[^triggers]: [YouTube: [CVPR'21 WAD] Keynote - Andrej Karpathy, Tesla](https://youtu.be/g6bOwQdCJrc?t=890)
[^tiktok_for_you]: [How TikTok recommends videos #ForYou](https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you)
[^netflix_ab_testing]: [Netflix Tech Blog: Selecting the best artwork for videos through A/B testing](https://netflixtechblog.com/selecting-the-best-artwork-for-videos-through-a-b-testing-f6155c4595f6)
[^netflix_homepage]: [Netflix Tech Blog: Learning a Personalized Homepage](https://netflixtechblog.com/learning-a-personalized-homepage-aa8ec670359a)
[^netflix_artwork]: [Netflix Tech Blog: Artwork Personalization at Netflix](https://netflixtechblog.com/artwork-personalization-c589f074ad76)
[^_big_data_in_practice]: [Bernard Marr: Big Data In Practice](https://bernardmarr.com/books/)
[^buffer_idea_to_product]: [Idea to Paying Customers in 7 Weeks: How We Did It](https://buffer.com/resources/idea-to-paying-customers-in-7-weeks-how-we-did-it/)
[^amp_robotics_spotify]: [Spotify: The Robot Brains Podcast: AMP Robotics @25:00](https://open.spotify.com/episode/2FzwkL7p2EJWomncgkVKVI?si=SZwqxsS_SheUX8O3yeqBRA&t=1502&dl_branch=1)