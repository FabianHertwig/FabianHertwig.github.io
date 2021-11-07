---
layout: post
title:  "How to build awesome Data Products"
date:   2021-10-23 17:24:07 +0200
categories: blog
---
The concept of the virtuous circle of AI came up again and again in the last couple of months when I was consulting clients who had ideas of using AI in their products. So in this post I want to explain the concept, show some examples of companies implementing the concept and explaining how to get started using this concept.

![the virtuous cycle](./assets/awesome-data-products/virtous_cycle.png)

# The Virtuous Circle of AI

The first time I heard of the virtuous cycle of AI was in this presentation from Andrew Ng, where he briefly describes it. Short enough so that you understand it, but too short to understand the significance of it.

<iframe width="720" height="405" src="https://www.youtube.com/embed/NKpuX_yzdYs?start=870" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


The circle states that a useful product will attract users. These users generate data and that data can be used to improve the product. That is a positive feedback loop and if you run that for some time, you have such a valuable dataset, that your product evolved to be the best of its kind. Eventually all users will be attracted to your product, so it becomes very hard for others to reproduce your product. If all users are attracted to your superior product, then it is hard for them to find users that create the needed data. To explain that further, let us look at some companies that implement the virtuous circle.

# The Tesla Data Engine

In my opinion one company that implements the circle top-notch is Tesla. They probably run quite a few virtuous circles with their sub products [^data_driven_safety] [^tesla_ai], the most famous one being the Tesla Autopilot. Tesla's Autopilot are self driving car features, which allows the car to drive itself. Right now it needs constant supervision from the driver, but the vision is that the car can drive itself completely independent.

Tesla builds electric cars, which might be a useful product by itself to many people. To make the autonomous driving features more useful, Tesla integrated the Intel Mobile Eye system into their early cars before building their own self driving car system. That system powered lane keeping and traffic aware cruise control [^tesla_hw_1]. So Tesla has a useful product, which attracts users. Because there are millions of Tesla cars driving around, Tesla can effectively use the fleet to collect data about the Autopilot system. For example, they once observed the problem, that bikes attached to the back of a car get recognized as bikes traveling along the street, but should be recognized as a part of the car. So they issued commands to the fleet, to collect images of bikes on cars. The fleet sends back these images or video sequences to Tesla, they can then label these images correctly and use this dataset to retrain their self driving Neural Networks, e.g. improve their product. Tesla calls this system the Data Engine and presented it for the first time at the Tesla Autonomy Day, see the video below. (If you want to also get a good explanation of how Neural Networks work, then start at: 1:52:00).

<iframe width="720" height="405" src="https://www.youtube.com/embed/Ucp0TTmvqOE?start=7518" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Tesla built the data feedback loop very intentionally into the cars. The current Autopilot Hardware allows Tesla to run neural networks in shadow mode, where they are not used to control the car but to observe the world or the system in control. Tesla uses shadow mode to deploy triggers on the fleet. For example to send back video sequences where bikes are attached to the car or when the driver had to intervene [^triggers].

----
## References
[^data_driven_safety]: [YouTube: Tesla Crash Lab Data-Driven Safety](https://www.youtube.com/watch?v=9KR2N_Q8ep8)
[^tesla_ai]: [YouTube: Andrej Karpathy - AI for Full-Self Driving at Tesla](https://youtu.be/hx7BXih7zx8?t=423)
[^tesla_hw_1]: [Wikipedia: Tesla Autopilot Hardware 1](https://en.wikipedia.org/wiki/Tesla_Autopilot#Hardware_1)
[^triggers]: [YouTube: [CVPR'21 WAD] Keynote - Andrej Karpathy, Tesla](https://youtu.be/g6bOwQdCJrc?t=890)