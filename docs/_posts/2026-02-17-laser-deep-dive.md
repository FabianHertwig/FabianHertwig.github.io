---
title: "How Photons Clone Themselves: From Laser Pointers to Shooting Down Drones"
date: 2026-02-17 12:00:00 +0200
description: "Every laser ever built works because photons can clone themselves. A deep dive into how we get from a light bulb to burning drones out of the sky, starting with Einstein's 1917 prediction that nobody knew what to do with for 43 years."
categories:
  - blog
tags:
  - Physics
  - Lasers
  - Quantum Mechanics
  - Engineering
---

A while ago I watched a video of a US Navy ship shooting down a drone with a laser. No missile, no bullet. A beam of light tracked the drone, held steady for a few seconds, and the thing caught fire mid-air and dropped into the ocean.

![The Laser Weapon System (LaWS) aboard USS Ponce. This is what started the rabbit hole.](/assets/images/laser-deep-dive/navy-laws.webp)
*The Laser Weapon System (LaWS) aboard USS Ponce. This is what started the rabbit hole. Photo: U.S. Navy.*

My first reaction: *how does light do that?*

Light is the thing that comes out of a lamp. It's what reads barcodes at the grocery store. My cat chases a laser pointer dot around the living room. How do you get from *that* to burning a military drone out of the sky?

And then the obvious follow-up: is it even the same thing? Is the physics behind a three-dollar laser pointer and a naval weapons system actually the same physics? Or are they just both called "laser" the way a toy car and a Formula 1 car are both called "car"?

Turns out: it really is the same physics. Every laser ever built (the pointer, the barcode scanner, the eye surgery machine, the drone-killer) works because of one quantum mechanical trick: **a photon hits an excited atom, and two identical photons come out.** Same wavelength, same direction, perfectly synchronized. The photon clones itself.

Einstein predicted this would happen in 1917 while he was trying to make some equations balance. He called it "stimulated emission," thought it was a curious theoretical detail, and moved on. Nobody figured out what to do with it for 43 years.

I went down the rabbit hole on this, and it goes *deep*. The materials that make lasers possible (ruby crystals, rare earth elements, certain gas mixtures) have these properties basically by accident. People discovered them because they noticed strange glows under certain conditions and got curious enough to investigate. The whole field exists because some physicists looked at a faintly glowing crystal and thought *huh, that's weird* instead of walking past it.

This post starts with a light bulb and ends with lasers that briefly outpower every power plant on Earth combined. It's a long one. Let's go.

## Part 1: Let's Start With a Light Bulb

![Incandescent light bulbs with their tungsten filaments glowing.](/assets/images/laser-deep-dive/light-bulb.webp)
*Photo: Joy Singh / [Pexels](https://www.pexels.com/photo/turned-on-pendant-lamps-2764942/)*

You flip a switch. A light bulb turns on. Simple, right? But what's actually happening inside that bulb is your first step into understanding why lasers are so weirdly special.

Inside an old-school incandescent light bulb, there's a tungsten wire. When you flip the switch, electricity flows through that wire, and because tungsten has electrical resistance, the wire heats up. A lot. We're talking about 2,500°C (4,500°F) kind of hot. And when things get that hot, something interesting happens at the atomic level.

### The Electron Shuffle: A Chemistry Refresher

Remember from chemistry class that electrons orbit atoms in specific energy levels? Think of these like the floors of a hotel. An electron can be on the ground floor, the second floor, the third floor, etc., but it can't just hang out in the stairwell between floors. Those in-between spaces? Not allowed. Quantum mechanics says no.

Now, when you heat up tungsten to ridiculous temperatures, you're basically pumping energy into the atoms. This energy causes electrons to get excited, and yes, that's literally the physics term. An excited electron absorbs energy and jumps from a lower energy level to a higher one. It's like someone giving our electron enough energy to take the elevator up several floors.

But here's the thing: electrons are homebodies. They don't want to be on the higher floors. The ground state, the lowest energy level, is where they're most stable and most comfortable. So after a tiny, tiny fraction of a second (sometimes nanoseconds, sometimes microseconds) they fall back down to a lower energy level.

And here's the crucial part: when an electron drops from a higher energy level to a lower one, it has to release the energy it gained. Energy can't just disappear. And it releases that energy as a photon, a particle of light.

The energy difference between the two levels determines the photon's wavelength, which we perceive as its color. Big energy difference means a high energy photon, which corresponds to blue or ultraviolet light. Small energy difference means a low energy photon, which gives you red or infrared light. The relationship is exact and mathematical: the photon's energy equals Planck's constant times its frequency, and frequency is related to wavelength by the speed of light. This is why each type of atom has its own characteristic spectrum, its own fingerprint of colors it can emit.

### Why Regular Light is Kind of Messy

So in your light bulb, you've got trillions upon trillions of tungsten atoms, all at different temperatures, with electrons constantly jumping up and falling back down. But here's the critical insight: this process is completely chaotic and random.

Electrons are jumping to different energy levels randomly because the thermal energy doesn't care which level an electron ends up in. It's just chaos, heat being absorbed however it can be. They're falling back down at random times because spontaneous emission is, well, spontaneous. There's no trigger, no cause. An excited electron just has some probability of falling down each moment, and eventually it does. The photons are shooting out in completely random directions because there's nothing to favor one direction over another. They go up, down, left, right, forward, backward, all 360 degrees worth of possibilities. And the photons are all different wavelengths because electrons are dropping between all sorts of different energy levels, not just one specific transition.

The result? Light that spreads out in all directions, with a broad spectrum of colors, which is why incandescent light looks yellowish-white rather than a pure color, and where all the light waves are completely out of sync with each other. The peaks of one wave don't line up with the peaks of another. Each photon is doing its own thing, like a crowd of people all talking at once instead of singing in unison.

This type of light is called incoherent light. It's messy, it's chaotic, it's random. And it's perfectly fine for lighting up your room. The incoherence doesn't matter when you just want to see where you're walking.

But what if we wanted something different? What if we wanted all the photons to be the same wavelength, to travel in the exact same direction, and to be synchronized with all their waves lined up perfectly? That's where lasers come in.

## Part 2: What Makes Lasers Special? (And Why Should We Care?)

Before we dive into how lasers work, let's understand why anyone wanted to build one in the first place. What properties of laser light make them so useful that people spent years trying to figure out how to create them?

### The Four Key Properties

Laser light has four special characteristics that regular light doesn't have, and each one enables different applications.

First, there's monochromaticity, which means the laser is essentially one pure color. Not "reddish" or "bluish" but a single, precise wavelength. A sodium vapor street lamp might look yellow and seem like one color, but it's actually emitting several different wavelengths in the yellow region. A laser, on the other hand, might emit light at exactly 632.8 nanometers, and nothing else. This precision is useful in surprising ways. If you're measuring distances with light (which is what surveyors do, what satellites use to map the Earth's surface, what scientists use in countless experiments) having exactly one wavelength means your measurements can be incredibly precise. You can calculate distances based on counting the number of wavelengths that fit in that distance, and if your wavelength is fuzzy, your measurement is fuzzy. In fiber optic communication, different wavelengths can carry different signals down the same fiber, but only if each laser is exactly one wavelength with no spread. And in medical applications, different tissues absorb different wavelengths differently, so you can use a laser to target specific structures. A laser tuned to be absorbed by blood vessels but not surrounding tissue can treat vascular problems without damaging healthy tissue.

Second is coherence, which means all the light waves are synchronized. Their peaks and troughs line up. This is like the difference between a stadium of people clapping randomly versus everyone clapping in perfect unison. The unified clapping is way more powerful and you can hear it much farther away. When light waves are coherent, they reinforce each other constructively. Where two peaks meet, they add up to an even bigger peak. This means the light doesn't spread out and dissipate as quickly. Coherent light can travel much farther while maintaining its intensity. This coherence also enables interference patterns. When you combine two coherent light beams, they create interference fringes, areas where they add up constructively and areas where they cancel out destructively. This is the basis for holography, where you can record three-dimensional images, and interferometry, where you can measure tiny distances or detect gravitational waves by looking at how interference patterns shift.

Third is directionality. A laser beam stays tightly focused and travels in essentially one direction. A regular light bulb radiates light in all directions equally, it's isotropic. Even if you put a reflector behind it to create a spotlight, most of the light still spreads out in a cone. A laser pointer, on the other hand, creates a beam that barely spreads at all. You can see the tiny dot on a wall across a room, and the beam is nearly the same width at the wall as it was when it left the pointer. This happens because all the photons are traveling in the same direction, parallel to each other. Actually, they're not perfectly parallel, there's always some small divergence, but it's remarkably small compared to any other light source. This directionality is what makes laser pointers work. It's why you can aim lasers at things and hit exactly what you're aiming at. It's why laser cutting works, you can focus all that energy onto a tiny spot. And it's why you can send laser signals long distances through fiber optics or even through space without losing the signal.

Fourth is high intensity. Because lasers concentrate all their energy into one wavelength, traveling in one direction, in sync, you can achieve incredibly high power densities. Intensity isn't just about total power, it's about power per unit area. A 1-watt laser can cut through materials that a 100-watt light bulb couldn't touch, because all that laser energy is concentrated into a spot that might be a fraction of a millimeter across, while the light bulb's energy is spread over an entire room. If you focus a laser beam through a lens, you can achieve power densities high enough to vaporize almost any material. This is why laser cutting works. This is why you can use lasers for welding, for drilling tiny holes in materials, for surgery where you need to precisely remove tissue.

{% include laser-coherence.html %}

So now that we know what we're trying to achieve (monochromatic, coherent, directional, intense light) the question becomes: how the heck do we make light do these weird things?

## Part 3: The Quantum Mechanical Magic (The Physics Foundation)

To understand how lasers work, we need to go deeper into what happens when light interacts with atoms. There are three key processes, and understanding them is the secret to understanding everything about lasers. This is the stuff Einstein figured out in 1917.

### The Three Sacred Processes

The first process is absorption. An atom is sitting there with its electron in a low energy state, just minding its own business. A photon comes along, traveling through space. Now, here's the thing: the photon can't just randomly interact with the atom. The photon has to have exactly the right amount of energy. If the photon's energy matches the energy difference between the electron's current level and some higher level, then the electron can absorb that photon and jump up to that higher energy level. The photon disappears (its energy is now stored in the excited electron) and the electron is now in a higher energy state. It's like the electron used the photon as currency to buy a ticket to a higher floor.

If the photon's energy doesn't match any allowed transition, it just passes by without interacting. This is why glass is transparent to visible light, the energy levels in silicon dioxide atoms are spaced such that visible photons don't have the right energy to cause transitions. The photons just pass through.

The second process is spontaneous emission. The excited electron is unstable up there on that higher energy level. It wants to fall back down. After some random amount of time (could be nanoseconds, could be microseconds, could be milliseconds depending on the specific transition and atom) it spontaneously falls back down to a lower energy level. When it does, it has to release the energy it's been storing, and it releases it as a photon. That photon has energy equal to the difference between the two levels.

But here's the key thing: this happens randomly. There's no trigger, no external cause. It's like radioactive decay, you can't predict exactly when a specific excited electron will emit, you can only know the probability. And when it does emit, the direction is random. Up, down, sideways, any direction is equally likely. This is what's happening in your light bulb. This is what's happening in a neon sign, in a fluorescent tube, in any normal light source. Spontaneous emission gives you that chaotic, incoherent light.

The third process is stimulated emission, and this is where Einstein's genius comes in. Imagine an electron is sitting in an excited state, just hanging out, waiting to eventually fall back down via spontaneous emission. Now imagine another photon comes along, a photon that has exactly the same energy as the photon that would be released if the electron dropped down.

Einstein's mathematics showed that this incoming photon can actually trigger the electron to drop down immediately, before it would have spontaneously emitted. And here's the absolutely crucial part: when the electron drops down via stimulated emission, it releases a new photon that is identical to the triggering photon in every way. Same wavelength? Yes. Same direction? Yes. Same phase, meaning its wave peaks and troughs line up with the original photon? Yes.

So one photon goes in, and two identical photons come out, both traveling in the same direction, perfectly synchronized. The photon cloned itself.

This is the entire secret of how lasers work. This is the process Einstein predicted. This is what we're going to exploit.

### The Problem: Population Inversion

But here's the thing: under normal circumstances, stimulated emission basically never happens. Why not?

Because most atoms, most of the time, have their electrons in the ground state. They're not excited. So when a photon comes along, it's much more likely to be absorbed by an electron jumping up than to cause stimulated emission from an already-excited electron.

Let's say you have a million atoms, and you send a beam of light through them. If all the electrons are in the ground state, photons will be absorbed, electrons will be excited, and then those electrons will spontaneously emit in random directions. You don't get amplification. You get absorption and then random re-emission.

For stimulated emission to dominate, you need more atoms with electrons in the excited state than in the ground state. This weird, unnatural condition is called population inversion. It's called that because normally the lower state is more populated, but we need to invert that.

Population inversion doesn't occur naturally. Left to themselves, atoms always have more electrons in lower states than higher states. That's just thermodynamics, systems naturally settle into lower energy states.

To make a laser, you have to force population inversion to happen. You have to pump energy into the system faster than the excited electrons can fall back down. You have to fight against the natural tendency toward equilibrium.

This is the fundamental challenge of building a laser: creating and maintaining population inversion.

## Part 4: The First Laser (The Ruby Laser Story: High Level)

Now that we understand the physics principles, let's see how Theodore Maiman actually built the first laser in 1960. We'll start with the high-level view, and then dive deeper into why his approach worked.

Maiman was working at Hughes Research Laboratories in California. Other researchers were trying to build lasers using gases, because the theory suggested gases might work better. But Maiman had a hunch about ruby. He knew ruby had the right kind of energy levels, and ruby crystals could be grown large and of high quality.

### The Apparatus

![Diagram of a ruby laser: the ruby rod sits inside a coiled flash lamp, with mirrors at both ends. The red beam emerges from the partially reflective mirror on the left.](/assets/images/laser-deep-dive/ruby-laser.webp)
*A ruby laser. The pink rod is the ruby crystal, surrounded by a coiled xenon flash lamp. Image: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ruby_laser.webp), Public Domain.*

Maiman's laser was elegantly simple, at least in concept. He had a ruby rod about the size of a finger, roughly 1 cm in diameter and a few centimeters long. Ruby is aluminum oxide (Al₂O₃) with a small amount of chromium atoms mixed in, which gives it that characteristic red color. Both ends of the ruby rod were polished flat and parallel, then coated with silver to make them reflective. One end was coated to be about 100% reflective, the other about 95% reflective, letting 5% of the light through.

Wrapped around the ruby rod was a helical xenon flash lamp, essentially a very bright, intense camera flash that could produce a brilliant burst of white light for a few milliseconds. The flash lamp was coiled in a spiral around the ruby, so it could shine light into the ruby from all sides.

The whole thing was small enough to hold in your hands.

### How It Actually Works: The Step-by-Step Dance

When Maiman fired the flash lamp, here's what happened:

The flash lamp produces a brilliant burst of white light, containing many wavelengths. This light shines into the ruby from all sides. The chromium atoms in the ruby absorb certain wavelengths, specifically the blue and green parts of the spectrum. Electrons in the chromium atoms jump from low energy states up to high energy states. This happens for billions and billions of chromium atoms throughout the ruby.

These excited electrons then quickly drop down to a special intermediate energy level and stay there for a relatively long time, milliseconds, which in atomic terms is an eternity. This accumulation of excited atoms is what creates population inversion.

Now the cascade begins. Eventually, one of those excited electrons spontaneously emits. It drops down to a lower energy state, releasing a red photon at 694.3 nanometers. This photon travels through the ruby in some random direction.

Most of these spontaneous photons are traveling at angles and just exit through the sides of the ruby rod. They're lost, contributing nothing to the laser beam. But occasionally, just by chance, a spontaneous photon happens to be traveling along the axis of the ruby rod, parallel to the length.

This photon travels through the ruby, and as it does, it passes by other chromium atoms that have electrons in excited states. Each time it encounters such an atom, there's a chance it triggers stimulated emission. When it does, now there are two photons, both traveling in the same direction, both perfectly in phase.

These two photons continue traveling through the ruby, potentially triggering more stimulated emission. Two becomes four, four becomes eight, eight becomes sixteen. The number of photons grows exponentially.

Eventually, these photons reach the mirror at the end of the ruby rod. The mirror reflects them back through the ruby in the opposite direction. As they travel back, they trigger even more stimulated emission. The number of photons builds up even more.

The photons bounce back and forth between the mirrors, and with each pass through the ruby, they trigger more and more stimulated emission. The light intensity builds up inside the optical cavity formed by the two mirrors.

But remember, one mirror is only 95% reflective. Each time the light hits this partially reflective mirror, 5% of it leaks through. At first, this leakage is negligible. But as the intensity builds up inside the cavity, that 5% leakage becomes substantial. That's your laser beam.

{% include laser-ruby-cavity.html %}

The laser beam that emerges is monochromatic (694.3 nm red light), directional (traveling along the axis of the rod), coherent (all triggered by stimulated emission from photons that were already in phase), and intense (amplified by many passes through the ruby).

### The Numbers Are Insane

The statistics behind what's happening are genuinely absurd. When an electron spontaneously emits a photon, it can go in any direction. If we think about it three-dimensionally, there are all possible directions in 3D space, technically 4π steradians of solid angle. For a photon to travel along the axis of the ruby rod and enter the optical cavity mode, it needs to be within a very small solid angle, determined by the diameter of the rod and the length.

For a typical ruby laser, maybe only 1 in 10,000 photons that spontaneously emit happen to be traveling in the right direction to contribute to the laser beam. The other 9,999 out of 10,000 just fly out the sides of the ruby and are lost.

Think about this: it's like trying to fill a swimming pool by throwing water balloons in random directions and hoping one lands in the pool. It seems impossibly wasteful.

But here's why it works anyway: once you have even a few photons traveling in the right direction and bouncing between the mirrors, stimulated emission takes over. Stimulated emission, unlike spontaneous emission, is directional. The new photon travels in the same direction as the triggering photon. This is the magic trick.

So you start with maybe just 1 photon going in the right direction. Through stimulated emission, that becomes 2, then 4, then 8, then 16. The growth is exponential. Even though you start with very few photons going the right way, they multiply so quickly that soon they completely dominate over the spontaneous emission happening in random directions.

The gain per pass through the ruby is important. If you have strong population inversion, one photon might trigger enough stimulated emission to create 1.5 photons per centimeter it travels. After traveling through a few centimeters of ruby, you've doubled your number of photons. After the photons bounce back and forth ten times, you've multiplied your initial photon count by an enormous factor.

The optical cavity is essential for this. Without the mirrors, the photons would just pass through once and exit. They wouldn't have multiple chances to trigger stimulated emission. With the mirrors, the photons can bounce back and forth hundreds or thousands of times before they finally leak out through the partially reflective mirror, and each pass gives them opportunities to multiply.

So yes, the initial probability is low. Yes, most spontaneously emitted photons are wasted. But exponential growth is extraordinarily powerful, and the optical cavity gives the photons time to multiply into a torrent of synchronized light.

## Part 5: Why Can Some Materials Do This? (The Secret of Laser Media)

Now that we've seen how a laser works at a high level, a natural question arises: why does ruby work as a laser medium? Why does a helium-neon gas mixture work? Why does a CO₂ molecule work? What makes certain materials special, while most materials can't be used to make lasers at all?

The answer lies in the structure of their energy levels, and specifically in something called metastable states.

### The Metastable State: Nature's Battery

Remember, for a laser to work, you need population inversion. You need lots of atoms with electrons in an excited state. But normally, excited electrons fall back down really quickly via spontaneous emission, sometimes in nanoseconds. If excited electrons only stayed excited for nanoseconds, you'd need to pump energy into the system absurdly fast just to keep up with the electrons falling back down. You'd be like someone trying to fill a bathtub with the drain wide open.

This is where metastable states save the day. A metastable state is an excited energy level where an electron can stay for a relatively long time before falling back down. "Relatively long" in quantum mechanics might mean milliseconds instead of nanoseconds, but that's a million times longer. It's like the difference between water draining from a bathtub in one second versus 11 days. Suddenly, you can fill the bathtub faster than it drains.

### Why Do Metastable States Exist?

This is where quantum mechanics gets interesting. Not all transitions between energy levels are equally likely. Some transitions happen very quickly, and others happen very slowly. This has to do with quantum mechanical selection rules.

When an electron emits a photon and drops to a lower energy level, the most common mechanism is electric dipole radiation. For this to happen efficiently, certain quantum mechanical conditions need to be met. The electron's orbital angular momentum needs to change by exactly one unit (ΔL = ±1), and there are rules about the magnetic quantum number and spin as well.

If a transition satisfies all these selection rules, it's called an "allowed" transition, and it happens quickly, nanoseconds or faster. If a transition violates these selection rules, it's called a "forbidden" transition. Now, "forbidden" doesn't mean impossible, quantum mechanics is probabilistic, not deterministic, but it means the probability per unit time is much, much lower. A forbidden transition might take milliseconds or even seconds instead of nanoseconds.

These forbidden transitions create metastable states. The electron is in an excited state, but the only way down violates selection rules, so the electron gets stuck there for a while.

Different atoms and molecules have different arrangements of energy levels. In most materials, all the downward transitions are allowed, so electrons fall back down quickly, and you can't build up population inversion. But in certain materials, ruby, helium-neon, CO₂, rare earth ions, and others, the energy level structure happens to have states where the downward transitions are forbidden or discouraged. These materials can support metastable states.

Finding materials with the right energy level structure is part science, part luck. Researchers calculate energy levels using quantum mechanics, measure them experimentally, and test which materials might work as laser media. Not every material works. In fact, most don't. The material needs the right combination of properties: energy levels that can be easily pumped, a metastable state with a long enough lifetime, a lasing transition that emits at a useful wavelength, and the material needs to be transparent to both the pump light and the laser light.

### How Ruby Works: A Three-Level System

Let's look more closely at ruby to understand how metastable states work in practice. Ruby is aluminum oxide (Al₂O₃) (essentially sapphire) with about 0.05% of the aluminum atoms replaced by chromium atoms (Cr³⁺). The term "doped" means that small amounts of one element are mixed into the crystal structure of another material. In this case, chromium is doped into aluminum oxide. The chromium atoms are the ones that actually produce the laser light.

Here's how the energy levels work in chromium:

The chromium ion has a ground state where the electrons are in their lowest energy configuration, happy and stable. It has several high energy levels that electrons can be excited to, these are called the pump bands because they're where the pump light sends the electrons. And crucially, it has a metastable state sitting in between the ground state and the pump bands.

When you shine bright light from the flash lamp onto the ruby, the chromium ions absorb photons in the blue and green parts of the spectrum. Why blue and green? Because the energy of blue and green photons happens to match the energy difference between the ground state and the pump bands. The electrons jump from the ground state up to those high energy pump bands. So far so good, you're pumping energy into the system.

Now here's the clever part: those high energy pump band states are not metastable. Electrons in those pump bands very quickly (in picoseconds) drop down to the metastable state. But this transition doesn't emit light. Instead, the energy is transferred to vibrations in the crystal lattice, the atoms in the ruby crystal start vibrating more. This is heat. The crystal gets a little warmer, but the electron has moved from the pump band to the metastable state.

And now the electron sits there in the metastable state. It can stay there for milliseconds, which is an eternity on atomic timescales. This is plenty of time for you to pump more and more chromium ions into this metastable state. The flash lamp keeps firing, more electrons jump to pump bands, they drop to the metastable state, and the population in the metastable state builds up.

Eventually, you can get more chromium ions with electrons in the metastable state than in the ground state. You've achieved population inversion between the metastable state and the ground state.

Now, when one electron spontaneously drops from the metastable state to the ground state, it emits a red photon at 694.3 nanometers. That photon travels through the crystal, and if it encounters another chromium ion with an electron in the metastable state, it can trigger stimulated emission. Now you have two identical red photons. Those two photons can trigger more stimulated emission. The process cascades, and you get your laser.

This is called a three-level system: ground state, pump bands at high energy, and metastable state at intermediate energy. The key is that you pump to the high levels, electrons quickly relax to the metastable state without emitting light, and then they lase from the metastable state down to the ground state.

{% include laser-energy-levels.html %}

### Other Laser Media: Different Tricks, Same Principle

Different laser materials use different energy level schemes, but they all rely on having some kind of metastable state or equivalent.

In a helium-neon laser, helium atoms are excited by an electrical discharge, high voltage causes electrons to flow through the gas, colliding with and exciting the helium atoms. The excited helium atoms have energy levels that happen to closely match certain excited levels in neon. When an excited helium atom collides with a neon atom, it can transfer its energy through a collision, leaving the neon atom in an excited state. These excited neon states are metastable. Population inversion builds up in the neon, and the neon lases.

In a CO₂ laser, nitrogen molecules are excited by the electrical discharge. The excited nitrogen molecules are very stable in certain vibrational states and hold onto their energy for a long time. When they collide with CO₂ molecules, they transfer energy to a specific vibrational mode of the CO₂ molecule, the molecule vibrates in a way where the three atoms move asymmetrically. This vibrational mode is metastable. The CO₂ molecules build up population inversion and lase in the infrared.

In semiconductor lasers, the physics is a bit different because you're dealing with bands of energy levels rather than discrete atomic levels, but the principle is the same: you create conditions where there are more electrons in higher energy states ready to emit photons than there are in lower energy states ready to absorb them.

In fiber lasers, rare earth ions like ytterbium or erbium are embedded in glass, again, this is called doping, where small amounts of these rare earth elements are mixed into the glass material. These ions have metastable states. You pump them with other lasers, electrons move to metastable states, population inversion builds up, and they lase.

The unifying principle is always: you need metastable states or something equivalent so that you can build up population inversion faster than spontaneous emission depletes it. Without metastable states, building a laser becomes extraordinarily difficult or impossible.

## Part 6: Where Does the Energy Come From? (Conservation Laws Still Apply)

If a laser beam is incredibly powerful and intense, where is all that energy coming from? Energy can't be created from nothing, so what's the source?

The answer is straightforward but important to understand: all the energy in the laser beam comes from whatever is pumping the laser. You're not creating energy. You're converting energy from one form to another and concentrating it.

### Energy Bookkeeping

Let's trace the energy flow in a ruby laser:

You have a flash lamp powered by electricity. Let's say you put in 1000 joules of electrical energy into the flash lamp capacitor. The flash lamp converts that electrical energy into light, though not with perfect efficiency. Maybe 50% becomes light and 50% becomes heat in the flash lamp itself. So now you have 500 joules of light energy radiating from the flash lamp in all directions.

This light shines on the ruby rod. The ruby absorbs some of this light, specifically the blue and green wavelengths that match its absorption bands. But not all the light is absorbed. Some reflects off the surface, some passes through without being absorbed, some is the wrong wavelength for the chromium atoms to absorb. Maybe only 100 joules actually get absorbed by chromium ions in the ruby.

Those 100 joules of absorbed energy excite chromium ions, pumping electrons up to high energy pump band states. Those electrons then drop to the metastable state, giving off the extra energy as heat, the vibrations in the crystal lattice. Then eventually, through stimulated emission, the electrons drop from the metastable state to the ground state, emitting red photons.

But here's the thing: the red photons emitted have less energy than the blue and green photons that were absorbed. The energy of a photon is proportional to its frequency, and blue light has higher frequency than red light. The energy difference went into heat when the electrons dropped from the pump bands to the metastable state. So maybe only 30 joules actually come out as red laser light.

And of those 30 joules, not all of it comes out as the useful laser beam. Some photons spontaneously emit in random directions and escape from the sides of the rod. Some energy is absorbed by impurities or defects in the ruby. Some energy is lost in the mirrors, which aren't perfectly reflective. Maybe you get 10 joules out as an actual laser pulse.

So you put in 1000 joules of electricity, and you get 10 joules of laser light. That's 1% efficiency. The other 990 joules became heat in various parts of the system.

Early ruby lasers were indeed about 1% efficient. Modern fiber lasers have gotten this up to 70-80% efficiency through better designs and materials, which is remarkable, but the principle is the same: you're not creating energy, you're converting it from one form (electrical or optical pump energy) to another (laser light), and some is always lost as heat.

### What Lasers Actually Do: Energy Concentration

So what is the special thing a laser does? It's not creating energy from nothing. What it's doing is concentrating energy spatially, temporally, and spectrally.

Think about it this way: the flash lamp radiates light in all directions. That light is spread out over the entire surface area of the ruby rod and the surrounding space. The light is also spread out over time, the flash lamp might fire for a few milliseconds. And the light is spread out over many wavelengths: blue, green, yellow, all the colors the flash lamp produces, each carrying some of the energy.

The laser takes energy that was spread out in space, time, and wavelength, and concentrates it. The output laser beam is traveling in essentially one direction, not spreading out in all directions like the flash lamp. It's one wavelength, not spread across the spectrum. And it can be concentrated in time, some lasers produce pulses that are only nanoseconds or even femtoseconds long, which means all that energy is released in an incredibly short duration.

This concentration is what gives lasers their power. A 1-watt laser doesn't produce more total power than a 1-watt light bulb. Both are converting 1 watt of input energy into light. But the laser concentrates that power into a tiny spot, into a brief duration, into one pure wavelength. That concentration is what allows it to do things like cut through metal.

It's analogous to how a magnifying glass works. A magnifying glass doesn't create heat energy from nothing. It takes the sun's light that would normally be spread over a large area and concentrates it onto a tiny spot. That concentration of the same total energy is what can start a fire, even though no new energy was created.

The laser does something similar, but instead of using a lens to spatially concentrate already-existing light, it uses the physics of stimulated emission to create light that's already concentrated, monochromatic, directional, and coherent from the moment it's generated.

## Part 7: The Heat Problem (And Why Doesn't the Laser Melt?)

Another important question: if photons are bouncing back and forth inside the cavity, building up intensity, why doesn't the laser medium just get incredibly hot or even melt?

The answer has several parts.

### Energy Flow in the Laser

First, let's track where heat is actually generated. You're pumping energy into the laser medium, whether that's flash lamp light, electrical discharge, or pump laser light. This energy excites atoms or ions or molecules into higher energy states.

Some of this pump energy goes directly into heat through a process called quantum defect heating. Remember the ruby laser: electrons jump to high pump bands when they absorb blue-green photons, then drop to the metastable state, releasing the difference as heat through vibrations in the crystal lattice. Then they lase from the metastable state, producing red photons. You're putting in blue-green photons (higher energy) and getting out red photons (lower energy). The difference becomes heat in the material.

Then, not all the excited atoms undergo stimulated emission contributing to the laser beam. Some undergo spontaneous emission, releasing photons in random directions that don't contribute to the laser beam. These photons are eventually absorbed somewhere in the system and become heat.

The mirrors aren't perfect. Each time a photon hits a mirror, a tiny fraction is absorbed rather than reflected. This absorption heats up the mirror coatings.

So yes, the laser is constantly generating heat as it operates. Running a laser does heat up the laser medium and the surrounding components. This is a real engineering challenge.

### Cooling and Thermal Management

For low-power lasers, like a small helium-neon laser or a laser pointer with a semiconductor laser, the heat generation is small enough that it can be dissipated to the surrounding air through natural convection and radiation. The device might get warm to the touch, but not dangerously hot.

For high-power lasers, cooling becomes critical. Ruby lasers and other pulsed solid-state lasers often use water cooling. The flash lamp and the ruby rod are both cooled by flowing water through channels in the housing. You can only fire the laser in short pulses, and then you have to wait for the heat to dissipate before firing again. Fire too quickly, and the rod will overheat and potentially crack.

CO₂ lasers often have gas flowing continuously through the tube. Fresh, cool gas is constantly supplied at one end, and hot gas is removed at the other end. This convective flow carries away the heat deposited in the gas by the electrical discharge.

For industrial fiber lasers producing kilowatts of continuous power, thermal management is a major part of the design. But fiber lasers have a big advantage here, which we'll discuss in detail later: their thin geometry means they have a huge surface-area-to-volume ratio, so heat can escape efficiently from the core to the surface.

### Why the Intense Light Doesn't Cause Direct Heating

Now, about the intense light bouncing around inside the cavity: yes, there are billions of photons inside the cavity, but they're generally not being absorbed by the laser medium in a way that creates heat. That's the whole point.

Photons at the laser wavelength are essentially transparent to the laser medium when population inversion exists. If a photon encounters an atom with an electron in the ground state, it could potentially be absorbed, but remember, we've achieved population inversion, so most atoms have electrons in the excited state, not the ground state. If a photon encounters an atom with an electron in the excited state, it causes stimulated emission, releasing another identical photon. The photon isn't absorbed and converted to heat; instead, it's cloned.

So the laser photons bouncing back and forth aren't directly heating up the medium. They're either triggering stimulated emission (which adds more photons rather than removing them and converting them to heat) or they're passing through without interaction.

The heat comes primarily from the pumping process (the quantum defect heating where higher energy pump photons are converted to lower energy laser photons with the difference becoming heat) and from non-ideal efficiencies throughout the system, not from the laser light itself being absorbed by the medium.

That said, in very high-power lasers, there can be issues. If any impurities or defects in the laser medium absorb even a tiny fraction of the laser light, that spot can heat up dramatically and potentially damage the material. This is why high-power laser materials need to be extremely pure and defect-free. Even a tiny impurity that absorbs one part per million of the circulating laser power can create a hot spot that grows and damages the crystal.

### The Optical Damage Threshold

There's also a fundamental limit to how intense light can get before it starts to damage materials through nonlinear effects. At extremely high intensities, the electric field of the light itself becomes so strong that it can rip electrons away from atoms, creating a plasma. This is called optical breakdown, and it permanently damages the material.

So there is an ultimate limit to how much power you can build up inside a laser cavity before you start causing damage. But for most lasers operating under normal conditions, the intensity inside the cavity is well below this damage threshold. The engineering challenge is managing the heat from the pumping inefficiencies, not from the circulating laser light itself.

## Part 8: The Evolution of Lasers (Chronological Journey Down the Iceberg)

After Maiman's ruby laser proved the concept in 1960, researchers realized they could apply the same principles using different materials and different pumping methods. Each new type of laser opened up new applications and solved different problems.

### Helium-Neon Laser (1961)

Just a year after the ruby laser, Ali Javan, William Bennett, and Donald Herriott at Bell Labs created the first gas laser using a mixture of helium and neon. This was a major breakthrough because it was the first continuous wave laser, meaning it produced a steady beam rather than pulses.

Instead of a solid crystal, they used a glass tube filled with helium and neon gas at low pressure. Instead of using a flash lamp for pumping, they ran a high voltage through the gas, creating an electrical discharge. If you've ever seen a neon sign, you know what this looks like, the gas glows as the electricity flows through it.

The discharge excites helium atoms by giving their electrons enough energy to jump to higher energy levels through collisions with the flowing electrons. These excited helium atoms then collide with neon atoms. Due to a fortunate coincidence, certain excited energy levels in helium have almost exactly the same energy as certain excited levels in neon. When an excited helium atom collides with a ground-state neon atom, the energy can transfer from the helium to the neon through what's called collisional energy transfer, leaving the neon atom in an excited state.

These excited neon states are metastable, so the neon atoms accumulate in these excited states, creating population inversion. The neon atoms then undergo stimulated emission, producing red light at 632.8 nanometers, which is the characteristic color of helium-neon lasers.

![A helium-neon laser in operation, glowing orange-red in a darkened lab.](/assets/images/laser-deep-dive/hene-laser.webp)
*A helium-neon laser. The orange glow in the tube is the gas discharge; the actual laser beam is the thin red line exiting to the left. Photo: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Henelaser.webp), CC BY-SA 3.0.*

Helium-neon lasers became the workhorses of many applications because they were relatively cheap, reliable, and produced a stable, continuous beam. For decades, the laser pointer in every physics lecture hall and the barcode scanner in every grocery store used HeNe lasers. They're still used today for alignment tasks in laboratories and in surveying equipment, though they're increasingly being replaced by semiconductor lasers which are even cheaper and more compact.

### CO₂ Laser (1964)

Kumar Patel at Bell Labs developed the carbon dioxide laser, and it turned out to be incredibly powerful and efficient compared to earlier lasers. This laser uses a gas mixture of carbon dioxide, nitrogen, and helium.

The nitrogen molecules in the mixture are excited by an electrical discharge, similar to the HeNe laser. Nitrogen molecules have vibrational modes (the two nitrogen atoms can vibrate like they're connected by a spring) that can store energy. When nitrogen molecules are excited into a particular vibrational mode, they hold onto that energy for a very long time because there's no easy way for the molecule to release the energy. The transition that would allow the nitrogen to de-excite is quantum mechanically discouraged.

When these excited nitrogen molecules collide with CO₂ molecules, they can transfer their energy to a specific vibrational mode of the CO₂ molecule. The CO₂ molecule can vibrate in several different ways, the two oxygen atoms can move symmetrically outward and inward (symmetric stretch), they can move asymmetrically with one moving out while the other moves in (asymmetric stretch), or the molecule can bend. The nitrogen excites the CO₂ into the asymmetric stretch mode, and this mode is metastable enough to build up population inversion.

The CO₂ molecules then lase when they drop from the asymmetric stretch mode to lower vibrational states, producing infrared light at 10,600 nanometers. You can't see this with your eyes (it's far into the infrared) but it's incredibly useful for industrial applications.

CO₂ lasers can be extraordinarily efficient. They can convert 20% or more of the input electrical energy into laser light, which is far better than most other laser types at the time. They can also produce enormous amounts of power. Industrial CO₂ lasers can output tens of kilowatts continuously, and the most powerful ones can exceed 100 kilowatts.

The infrared wavelength is strongly absorbed by most organic materials and many metals, making it ideal for cutting and welding. If you've ever seen a laser cutter at a makerspace slicing through plywood or acrylic, there's a good chance it's a CO₂ laser. Industrial CO₂ lasers cut through steel plates inches thick. They're used extensively in manufacturing, in the automotive industry, in aerospace, anywhere precision cutting is needed. A 10-kilowatt CO₂ laser (which would fit in a room about the size of a garage) can cut through 25mm of steel. That's an inch of solid steel, sliced like butter.

![A laser cutting machine slicing through a metal sheet, throwing off bright sparks.](/assets/images/laser-deep-dive/laser-cutting.webp)
*An industrial laser cutting through metal. Photo: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Laser_cutting_machine.webp), CC BY-SA 3.0.*

### Dye Lasers (1966)

Peter Sorokin and J. R. Lankard at IBM, working independently from F. P. Schäfer in Germany, created lasers using organic dye molecules dissolved in liquid solvents. This was a completely different approach from solid crystals or gases.

A dye laser uses a solution of organic dye molecules. These are complex molecules with lots of carbon rings, similar in structure to the colorful dyes used in fabric or ink, in fact, some laser dyes are related to textile dyes. The dye gives the solution a vivid color because it absorbs certain wavelengths of light. This dye solution flows through a glass cell, continuously circulated by a pump to prevent overheating in one spot.

You pump the dye optically, either with another laser or with a flash lamp, shining intense light into the cell. The dye molecules absorb the pump light, exciting electrons to higher energy states. What makes organic dye molecules special is their complex molecular structure. They have many closely-spaced energy levels, almost forming a quasi-continuum rather than discrete levels. When excited electrons fall back down, they can emit photons over a range of wavelengths rather than just one specific wavelength.

Here's what makes dye lasers unique and valuable: by placing wavelength-selective optical elements in the laser cavity (specifically, diffraction gratings or prisms that reflect different wavelengths at different angles) you can select which wavelength gets amplified. By rotating the grating, you can tune the laser's output wavelength. Want blue light? Rotate the grating one way. Want yellow? Rotate it another way. You can smoothly tune across a range of wavelengths, typically spanning 30-50 nanometers for a given dye.

Different dyes cover different wavelength ranges. Rhodamine 6G, one of the most common laser dyes, can be tuned from about 560 to 640 nanometers, covering yellow-orange-red. Coumarin dyes cover blue-green wavelengths. By switching dyes and adjusting the cavity, you can access wavelengths from the near-ultraviolet all the way to the near-infrared.

This tunability revolutionized spectroscopy, the study of how light interacts with matter. Researchers could tune the laser to exactly the wavelength needed to probe specific molecular transitions, allowing them to study energy levels, chemical bonds, and molecular dynamics with unprecedented precision. Dye lasers were used extensively in chemistry and physics research, in medical diagnostics, and even in isotope separation for nuclear applications. Though they've been largely superseded by tunable solid-state lasers and optical parametric oscillators which are more convenient and don't require flowing liquid dyes, dye lasers were crucial for several decades and are still used in some specialized applications.

### Semiconductor Lasers (1962-1970s)

This is where lasers became small, cheap, and ubiquitous. Robert Hall at General Electric created the first semiconductor laser in 1962, just two years after the ruby laser, but it took another decade of development before they became practical for everyday use.

A semiconductor laser, also called a laser diode, uses a semiconductor material, typically gallium arsenide or related compounds like indium phosphide or gallium nitride. You create a p-n junction, which is the same basic structure used in regular diodes and transistors. On one side of the junction, the semiconductor is doped (meaning impurities are intentionally added) to have excess electrons (n-type), and on the other side, it's doped to have excess holes, which are the absence of electrons that act like positive charge carriers (p-type).

When you apply electrical current in the forward direction across this junction, electrons from the n-type side and holes from the p-type side are pushed toward the junction. At the junction, electrons and holes meet and recombine. When an electron falls into a hole, it drops from a higher energy state in the conduction band to a lower energy state in the valence band, and the energy difference is released as a photon.

At low current, this process just produces incoherent light, which is how an LED works. But at high enough current density, something remarkable happens. The junction region becomes filled with electrons waiting to recombine and holes waiting to be filled. This creates population inversion between the conduction band and valence band. Now when a photon is emitted, it can trigger stimulated emission from other electron-hole pairs in the junction.

The semiconductor chip itself forms the optical cavity. The end faces of the chip are cleaved along natural crystal planes, creating smooth, flat surfaces. The difference in refractive index between the semiconductor (which has a high refractive index, typically around 3.5) and the air outside creates a partial reflection at these surfaces, not as strong as a metal mirror, but typically around 30% reflective, which is enough. Photons bounce back and forth between these end faces, building up intensity through stimulated emission, until laser light emerges.

Early semiconductor lasers had to be cooled to cryogenic temperatures (liquid nitrogen, 77 Kelvin) to work, which made them impractical. The problem was that at room temperature, too many carriers were thermally excited, making it hard to maintain population inversion. But through the 1960s and 1970s, researchers developed better materials and structures. They created double heterostructure designs, where layers of different semiconductor materials with different band gaps are stacked together. These structures confine the electrons, holes, and light to a tiny active region only a few hundred nanometers thick. This dramatically improved efficiency and reduced the threshold current needed to achieve lasing, eventually allowing the lasers to work at room temperature with practical current levels.

By the 1980s, semiconductor lasers were cheap enough and practical enough for consumer applications. They're incredibly compact, the entire laser chip is typically smaller than a grain of rice, sometimes just a few hundred micrometers on a side. They're efficient, often converting 30-50% of electrical energy to light, and can run on battery power. They can be modulated on and off extremely quickly, at gigahertz frequencies, which means you can encode billions of bits per second by rapidly switching the laser.

Semiconductor lasers gave us CD players and DVD players, where the laser reads the microscopic pits encoded on the spinning disk. They gave us fiber optic communication, where laser diodes send pulses of light carrying data through fiber cables at incredible speeds. They're in laser printers, in barcode scanners, in laser pointers, in computer mice, in range-finding sensors for autonomous vehicles. They're everywhere. The semiconductor laser is probably the most important laser technology in terms of everyday impact on modern life.

![Fiber optic cables plugged into networking equipment in a data center.](/assets/images/laser-deep-dive/fiber-cables.webp)
*Semiconductor lasers at work: each of these fiber optic cables carries data as pulses of laser light. Photo: Brett Sayles / [Pexels](https://www.pexels.com/photo/close-up-photo-of-cables-plugged-into-the-server-2420212/)*

### Excimer Lasers (1970s)

These ultraviolet lasers use excited dimers (hence the name "excimer," a contraction of "excited dimer") which are molecules that only exist in excited states and fall apart when they emit light.

Typical excimers are combinations of a noble gas and a halogen: argon fluoride (ArF), krypton fluoride (KrF), or xenon chloride (XeCl). In the ground state, these atoms don't bond to each other. A noble gas like argon doesn't normally form chemical bonds, and it certainly doesn't bond with a fluorine atom. But when they're both excited, they can temporarily bond to form an excimer molecule.

You create these excimers by sending a pulsed electrical discharge through a gas mixture at high pressure. The discharge creates excited atoms and ions, which then bond to form excimer molecules. These excited molecules are inherently unstable. They quickly emit a photon and dissociate back into separate atoms.

Because the lower state doesn't exist as a stable molecule (the atoms simply don't bond in the ground state) you automatically have population inversion. All the excimers are in the excited state, and there's essentially no ground state population to absorb photons. This makes excimer lasers very efficient at achieving population inversion.

Excimer lasers produce ultraviolet light at specific wavelengths depending on which excimer you use: ArF at 193 nanometers, KrF at 248 nanometers, XeCl at 308 nanometers. These ultraviolet wavelengths are absorbed very strongly by most materials and have enough energy to break chemical bonds directly.

This property makes excimer lasers ideal for precise material removal, a process called photoablation. The ultraviolet photons are absorbed in a very thin layer at the surface, and they break chemical bonds, essentially vaporizing the material atom by atom. The most famous application is LASIK eye surgery, where an excimer laser removes microscopic amounts of corneal tissue to reshape the eye and correct vision. The laser can remove tissue with incredible precision, a single pulse might remove only 0.25 micrometers of material, and the process is so precise that it doesn't damage the surrounding tissue.

Excimer lasers are also crucial in semiconductor manufacturing. They're used in photolithography, the process of creating the intricate patterns on computer chips. The short ultraviolet wavelength allows for extremely fine features to be patterned, the smaller the wavelength, the smaller the features you can create. Modern computer chips with transistors just nanometers in size are manufactured using excimer lasers.

## Part 9: The Deep End: Fiber Lasers (Modern Magic)

![Fiber optic strands with light glowing at their tips.](/assets/images/laser-deep-dive/fiber-optic-strands.webp)
*Photo: [Pexels](https://www.pexels.com/photo/fiber-optic-light-3363556/)*

Now we're getting into truly advanced technology. Fiber lasers emerged as practical devices in the 1990s and 2000s as researchers figured out how to build high-power lasers using optical fibers as the gain medium. These represent some of the most sophisticated and powerful lasers available today.

### What is a Fiber Laser?

The core concept is elegant: instead of having a separate laser crystal or gas tube, and then coupling the laser beam into an optical fiber for transmission to where you need it, what if the fiber itself was the laser?

A fiber laser uses an optical fiber as the gain medium, the optical cavity, and the beam delivery system all in one. The fiber itself does everything.

### The Special Fiber

Take an optical fiber, a thin strand of glass about 125 micrometers in diameter, about the thickness of a human hair. But this isn't ordinary glass. The core of the fiber, the central region where light travels, is doped with rare earth elements, meaning small amounts of rare earth ions are mixed into the glass during manufacturing.

The most common rare earth dopant is ytterbium. Ytterbium ions (Yb³⁺) have the right kind of energy level structure to work as a laser medium. They have a ground state and a metastable excited state, and the energy difference corresponds to near-infrared light around 1030 to 1100 nanometers.

Erbium (Er³⁺) is another common choice, especially for telecommunications, because erbium lases at 1550 nanometers, which happens to be the wavelength where silica optical fibers have the lowest loss, light can travel the farthest through the fiber at this wavelength. Thulium (Tm³⁺) and holmium (Ho³⁺) are used for longer wavelengths around 2000 nanometers, which are useful for materials processing and medical applications.

The rare earth ions are the active laser medium, analogous to how chromium ions were the active medium in ruby. But instead of a rigid rod-shaped crystal a few centimeters long, the laser medium is now a flexible fiber that can be meters or even hundreds of meters long, coiled up to fit in a compact package.

### Pumping the Fiber

You pump a fiber laser using semiconductor laser diodes, the technology I described earlier that's now cheap and efficient thanks to decades of development. These pump lasers are relatively inexpensive compared to other pumping methods.

The pump lasers emit light at a shorter wavelength than the fiber laser output. For ytterbium-doped fiber, the pump lasers typically emit at 915 or 975 nanometers (which corresponds to absorption bands of ytterbium), and the fiber laser outputs at 1030-1100 nanometers.

You couple these pump lasers into the fiber using special optical components. The pump light travels along the fiber, and as it propagates, the rare earth ions absorb the pump light. Their electrons jump to excited states. As you keep pumping energy in, you build up population inversion along the entire length of the fiber.

Because the fiber can be very long (sometimes 10 meters, 50 meters, or even more) you have a lot of length for the pump light to be absorbed and for population inversion to build up. This is one of the advantages of fiber lasers: you can scale up the power by making the fiber longer, giving you more gain medium.

### The Optical Cavity: Fiber Bragg Gratings

At each end of the active fiber, you need mirrors to create the optical cavity. But you can't just glue metal mirrors onto the end of a fiber. Instead, you write Fiber Bragg Gratings directly into the fiber using a clever technique.

A Fiber Bragg Grating (FBG) is a periodic variation in the refractive index of the fiber core. Imagine making the glass slightly denser in some places and less dense in others, in a regular repeating pattern, like stripes running perpendicular to the fiber axis. You create this pattern by exposing the fiber to ultraviolet light through a special mask or using interfering UV beams. The UV light causes a permanent change in the glass structure, slightly altering its refractive index.

This periodic pattern acts as a highly wavelength-selective mirror through a process called Bragg reflection. Light at the Bragg wavelength (determined by the spacing of the periodic pattern) reflects back strongly because reflections from each period of the grating interfere constructively. Light at other wavelengths passes through with minimal reflection because the reflections interfere destructively.

You write one FBG to be highly reflective (99.9% or more) at the laser wavelength and another FBG to be partially reflective (maybe 90% reflective, 10% transmitting). These FBGs, written directly into the fiber as permanent modifications to the glass structure, act as the mirrors for your laser cavity.

The beautiful thing is that this is all integrated into the fiber. There are no separate optical elements to align. The entire laser (gain medium with rare earth ions, optical cavity defined by FBGs, everything) is built into a single piece of fiber that you can coil up.

### How Amplification Works

Once you have population inversion in the ytterbium-doped fiber and the optical cavity defined by the FBGs at each end, the lasing process begins. Some spontaneous emission occurs from the excited ytterbium ions, and photons traveling along the fiber between the FBGs start to build up.

These photons travel along the fiber core, which acts as a waveguide keeping them confined. As they propagate, they pass by excited ytterbium ions and trigger stimulated emission. The light is amplified as it travels through the fiber. It reaches the FBG at one end, which reflects it back. The light travels back through the fiber in the opposite direction, gets amplified again by triggering more stimulated emission, reaches the other FBG, which partially reflects and partially transmits.

The transmitted portion that leaks through the partially reflective FBG is your output laser beam. The reflected portion continues bouncing back and forth, continuously building up intensity until a steady state is reached where the gain from stimulated emission equals the losses from the output coupler and various other small loss mechanisms.

### Why Fiber Lasers Are Extraordinary

Fiber lasers have several remarkable advantages over traditional bulk lasers, advantages that come directly from their unique geometry and integrated design.

The first major advantage is exceptional heat dissipation. In a traditional rod-shaped laser crystal, heat is generated throughout the volume of the rod when atoms are pumped and when quantum defect heating occurs. This heat has to conduct outward to the surface of the rod to be removed. The rod has a relatively small surface-area-to-volume ratio, which limits how efficiently heat can be extracted. If you try to pump too much power into a bulk crystal, the center heats up more than the edges, creating temperature gradients that cause optical distortions through thermal lensing, and can even crack the crystal from thermal stress.

A fiber, on the other hand, is extremely thin, typically 125 micrometers in diameter. It has an enormous surface-area-to-volume ratio. Heat generated anywhere in the fiber core can quickly conduct the short distance to the surface and dissipate into the surrounding environment. You can coil the fiber and actively cool it very efficiently. This means you can pump much more power into a fiber laser per unit length without overheating problems.

Modern fiber lasers routinely produce multiple kilowatts of continuous power. Industrial fiber lasers are commercially available with output powers of 10 kW, 20 kW, 30 kW, and experimental systems have exceeded 100 kW. To put that in perspective, a 20-kilowatt fiber laser outputs enough power to boil 30 kettles of water every second, except all that power is concentrated into a spot the size of a grain of sand. That's enough concentrated power to cut through thick steel plates like butter, weld heavy components, or process materials at high speeds. Yet the fiber itself can be kept cool enough that you could touch the outside of the cladding (though the laser beam emerging from it would certainly be extremely dangerous).

The second major advantage is exceptional beam quality. Because the light is guided by the fiber's waveguide structure, fiber lasers can maintain excellent beam quality. If you use a single-mode fiber, where the core is small enough that only one spatial mode can propagate, the laser output is fundamentally limited to a nearly perfect Gaussian beam with excellent focusability. This beam can be focused through a lens to a tiny spot, concentrating all that power into an incredibly small area.

Traditional high-power bulk lasers often suffer from thermal lensing, where heat-induced refractive index variations distort the beam, and from other aberrations that degrade beam quality as you scale up the power. Fiber lasers don't have this problem because the light is confined to the small fiber core the entire time, and the excellent cooling keeps the fiber from developing thermal gradients.

The third advantage is remarkable efficiency. Fiber lasers are among the most efficient lasers ever built. They can convert 70% to 80% of the pump power (from the laser diodes) into laser output. Compare this to CO₂ lasers at around 20% efficiency or early ruby lasers at 1% efficiency. This high efficiency means less electricity is wasted as heat, cooling requirements are reduced, and operating costs are significantly lower over the lifetime of the laser.

The fourth advantage is robustness and reliability. Traditional bulk lasers have free-space optics (mirrors, lenses, laser crystals) that need precise alignment. If the laser gets bumped, if temperature changes cause thermal expansion, or if vibrations occur, the alignment can drift and the laser performance degrades or fails entirely. This requires frequent realignment and maintenance.

A fiber laser has no free-space optics to misalign. Everything is built into the fiber with FBGs written directly into the glass. The laser is inherently mechanically stable. It can handle vibration, temperature changes, and harsh industrial environments without performance degradation. Fiber lasers installed in factories can run 24 hours a day, 7 days a week for years with minimal maintenance, often just replacing pump diodes as they age.

And finally, fiber lasers are surprisingly compact for their power output. A multi-kilowatt fiber laser can fit in an enclosure the size of a small refrigerator, whereas a CO₂ laser with similar power might fill an entire room with its gas handling system, high voltage power supplies, cooling systems, and beam delivery optics.

### Advanced Fiber Laser Architectures

Once you understand the basic fiber laser, there are several sophisticated variations that push performance even further and enable new applications.

One common architecture is the Master Oscillator Power Amplifier, abbreviated MOPA. Instead of trying to generate all your power in a single laser cavity, you split the system into stages. The master oscillator is a low-power, high-quality fiber laser that generates a clean seed beam with excellent beam quality, narrow linewidth, and well-controlled spectral properties. This seed beam typically outputs milliwatts to watts of power.

This seed beam is then sent through one or more amplifier stages. An amplifier stage is simply a length of rare-earth-doped fiber that's pumped by laser diodes, but without FBG mirrors forming a cavity. It doesn't oscillate or lase on its own. Instead, the seed beam passes through, and as it does, it triggers stimulated emission in the pumped fiber, amplifying the signal.

You can chain multiple amplifier stages together. The first stage might amplify the seed from milliwatts to watts, the second stage from watts to hundreds of watts, and subsequent stages can boost it to kilowatts or even tens of kilowatts. Each stage increases the power while maintaining the beam quality and spectral properties of the master oscillator.

This MOPA architecture gives you much more control over the laser characteristics. You can control the pulse shape, duration, and repetition rate by modulating the master oscillator. You can achieve very high peak powers in pulsed operation. You can maintain excellent beam quality throughout the amplification process. And you can scale to high average powers by adding more amplifier stages.

Another important technique is cladding pumping. In the simple fiber laser I described earlier, both the pump light and the laser light travel through the core of the fiber. But there's a clever variation that makes pumping much more practical: you launch the pump light into the cladding, the layer of glass surrounding the core.

The way this works requires a special double-clad fiber design. The fiber has a small core (maybe 10-20 micrometers diameter) doped with rare earth ions, surrounded by a larger cladding (maybe 125-400 micrometers diameter), and then an outer cladding with even lower refractive index. The inner cladding acts as a waveguide for the pump light, keeping it confined through total internal reflection.

As the pump light propagates through the cladding, bouncing around at various angles, it periodically passes through the doped core. Each time it passes through the core, some pump light is absorbed by the rare earth ions. Over the length of the fiber, all the pump light gets absorbed even though it's traveling in the larger cladding rather than the core.

The advantage of cladding pumping is enormous. The cladding is much larger than the core, perhaps 100 times larger in cross-sectional area. It's much easier to couple pump light into a larger area. You can use less expensive, lower brightness pump diodes. You can combine the output from many pump diodes, coupling them all into the cladding from different angles or from different points along the fiber.

Meanwhile, the laser light still travels only in the small core and comes out with excellent beam quality determined by the small core, even though the pumping happens in the much larger cladding. Cladding-pumped fiber lasers are the standard architecture for high-power applications because they allow efficient use of many pump diodes to achieve very high pump powers.

Finally, there are ultrafast fiber lasers. By carefully designing the fiber laser cavity and adding elements that favor short pulses, such as saturable absorbers that preferentially transmit high-intensity light, or through nonlinear effects in the fiber itself, you can create fiber lasers that emit incredibly short pulses of light. These pulses can be femtoseconds in duration. A femtosecond is one quadrillionth of a second, written as 10⁻¹⁵ seconds. To put this in perspective, there are more femtoseconds in one second than there are seconds in 30 million years. Light travels only 300 nanometers in a femtosecond, about the wavelength of ultraviolet light, roughly 1/300th the thickness of a human hair.

These ultrafast pulses have remarkable properties. Because each pulse is so short in time, but still contains a reasonable amount of energy (microjoules to millijoules), the peak power during the pulse is enormous, megawatts to gigawatts, even though the average power might only be watts. When such a short, intense pulse hits a material, the material doesn't have time to heat up. The energy is deposited and the pulse is gone before heat can conduct away from the absorption region. This allows for incredibly clean, precise material removal without a heat-affected zone.

Ultrafast fiber lasers are used for precision micromachining, cutting or engraving intricate patterns in metals, ceramics, glass, or polymers with minimal thermal damage. They're used in medical applications for delicate surgery where you want to remove tissue without heating the surrounding area. They're used in scientific research to study ultrafast phenomena like the dynamics of chemical reactions, electron motion in materials, or the behavior of molecules on femtosecond timescales.

## Part 10: Even Deeper (Because the Rabbit Hole Continues)

Just when you think fiber lasers represent the peak of laser technology, there are even more exotic approaches that push the boundaries of what's possible.

### Coherent Beam Combining

What if you want even more power than a single fiber laser can provide? There are fundamental limits to how much power you can extract from a single fiber before nonlinear optical effects distort the beam or before the intensity becomes high enough to damage the fiber itself. The solution is to combine multiple fiber lasers.

In coherent beam combining, you take multiple fiber lasers and carefully control their relative phases so they're all perfectly synchronized. Then you combine their beams using special optics. If the phases are matched correctly, the beams interfere constructively when they're combined, and the electric fields add up in amplitude rather than just in power.

Here's why this is remarkable: if you have ten fiber lasers, each producing one kilowatt of power, and you just combined them incoherently (phases random), you'd get ten kilowatts total. But if you combine them perfectly coherently with all phases aligned, the electric field amplitudes add up, so the electric field is ten times larger. Since intensity is proportional to the square of the electric field, you get one hundred times the intensity, not just ten times. Ten lasers can give you the intensity of a hundred-kilowatt laser in a focused spot.

Of course, achieving perfect coherent combining is extraordinarily difficult. You need to keep the phases of all the lasers matched to within a small fraction of a wavelength (less than a micrometer) despite vibrations, temperature changes, air currents, and other environmental disturbances. This requires sophisticated electronic feedback systems that continuously measure the relative phases using interferometry and adjust them in real time using phase modulators or by adjusting the current to the lasers.

Researchers have demonstrated coherent combining of dozens of fiber lasers, achieving combined output powers of many kilowatts with excellent beam quality. This is an active area of research, with potential applications in directed energy weapons, long-range power beaming, industrial materials processing, and scientific instruments requiring extremely high intensities.

There's also spectral beam combining, which is a different approach that's easier to implement but doesn't give you the intensity enhancement. You take multiple fiber lasers operating at slightly different wavelengths (maybe spaced a few nanometers apart) and use a diffraction grating to combine them spatially. Each wavelength comes in from a slightly different angle, and the diffraction grating bends them all into the same output direction. The powers simply add up, so ten one-kilowatt lasers give you ten kilowatts total. You don't get the coherent intensity boost, but you also don't need to control phases, making it much easier to implement for high power levels.

### Free Electron Lasers

These represent the absolute extreme of laser technology. They don't use atoms or molecules as the gain medium at all. Instead, the electrons themselves, moving at relativistic speeds, emit the light.

A free electron laser (FEL) starts with a particle accelerator, like the kinds used in physics research. You accelerate electrons to extremely high energies, approaching the speed of light, giving them enormous kinetic energy. At these speeds, relativistic effects become important, the electrons gain mass and time dilates for them relative to the stationary laboratory.

These high-energy electrons are then sent through a device called an undulator. An undulator is a long series of alternating magnets creating a periodic magnetic field. The magnets are arranged so that the field alternates direction: north-south, south-north, north-south, and so on, typically with a period of a few centimeters.

As the relativistic electrons pass through this alternating magnetic field, the Lorentz force causes them to oscillate back and forth, wiggling in a sinusoidal path. When charged particles accelerate (and changing direction is acceleration) they emit electromagnetic radiation. That's just classical electromagnetism, known since the 1800s.

So the wiggling electrons emit radiation. But here's where it gets clever: the spacing of the magnets, the strength of the magnetic field, and the energy of the electrons are all carefully tuned so that the radiation emitted from each wiggle interferes constructively. The radiation builds up coherently along the path of the electrons as they traverse the undulator.

Moreover, the radiation that's been emitted can interact back with the electrons through what's called the ponderomotive force. This causes the electrons to bunch up into microbunches separated by one wavelength of the emitted light. These bunches of electrons then radiate coherently, in phase with each other, like a phased array antenna. The radiation becomes even more intense.

This is stimulated emission, but from free electrons rather than bound electrons in atoms. The process is called self-amplified spontaneous emission (SASE) when the bunching happens spontaneously from noise, or a seeded free electron laser when you inject an external laser to trigger and control the bunching process.

Free electron lasers can produce light at almost any wavelength. By adjusting the electron energy and the undulator period, you can tune the output from microwaves to X-rays. This tunability is unique, no other laser technology can cover such a wide range.

The most powerful and scientifically important FELs produce X-rays, creating the brightest X-ray beams in the world by many orders of magnitude. These X-ray free electron lasers (XFELs) are used at national laboratories for cutting-edge science. They can produce X-ray pulses so intense and so brief (femtoseconds) that they can image individual molecules before the X-rays destroy them. They're used to watch chemical reactions happen in real time, to study materials at the atomic scale, to determine the structure of proteins, and to probe matter under extreme conditions like those in the cores of planets.

Of course, free electron lasers are absolutely enormous. They require particle accelerators hundreds of meters to kilometers long, arrays of powerful magnets, massive power supplies, and infrastructure that costs hundreds of millions to billions of dollars. The Linac Coherent Light Source at SLAC National Accelerator Laboratory uses a 3-kilometer-long accelerator. These are not something you'll find in a factory or hospital. But for fundamental research at the frontiers of science, they're invaluable.

### X-Ray Lasers from High Harmonic Generation

Another way to produce X-ray laser light without building a kilometer-long accelerator is through high harmonic generation (HHG). You take an ultrafast laser with very intense pulses (peak intensities of 10¹⁴ to 10¹⁵ watts per square centimeter) and focus it into a gas of atoms.

The electric field of the focused laser is so strong that it's comparable to the electric field that binds electrons to nuclei in atoms. This field distorts the atomic potential, temporarily suppressing the barrier that keeps electrons bound. An electron can tunnel out of the atom, essentially escaping through the barrier while the laser field is pulling it one way.

Then, half a cycle later, the laser field reverses direction and starts pulling the electron back toward the ion it came from. The electron accelerates in the laser field, gaining kinetic energy. When it crashes back into its parent ion, it recombines, and all that kinetic energy plus the ionization energy is released as a single high-energy photon.

Because the electron can be accelerated to high kinetic energies by the laser field before recombining, the emitted photons can have energies far exceeding the photon energy of the driving laser. If the driving laser is infrared, the emitted photons can be in the extreme ultraviolet or soft X-ray region. These photons are harmonics of the original laser frequency, odd multiples like the 11th harmonic, 13th, 15th, going up to the 100th harmonic or higher.

The remarkable thing is that this process naturally generates coherent radiation because the electron dynamics are driven by the coherent laser field. The emitted high-frequency light maintains phase coherence and can be collimated into a beam.

This process allows you to generate coherent extreme ultraviolet and soft X-ray light using a tabletop system. It's not as powerful or as versatile as a free electron laser, but it's vastly cheaper and smaller. High harmonic generation sources are used in research labs around the world for time-resolved spectroscopy, studying ultrafast dynamics in materials, attosecond science where processes are studied on timescales of 10⁻¹⁸ seconds, and imaging with nanometer resolution.

### The Future

Laser technology continues to advance in multiple directions. Researchers are developing quantum cascade lasers that use engineered quantum wells with artificial energy level structures designed for specific wavelengths, particularly in the mid-infrared where few other lasers operate. There are topological lasers that use concepts from topological physics to create lasers that are immune to defects and can maintain single-mode operation robustly. There are lasers using new materials like perovskites, which might enable new wavelengths and applications, or two-dimensional materials like graphene that might enable ultra-compact integrated photonic circuits.

Power levels continue to increase. Researchers have built lasers with peak powers exceeding a petawatt, that's 10¹⁵ watts, more than a thousand times the entire electrical generating capacity of the world, concentrated into a femtosecond pulse. These ultra-high-intensity lasers create electric fields strong enough to accelerate particles to relativistic energies, to create matter-antimatter pairs from pure energy through quantum vacuum fluctuations, and to test fundamental physics in extreme conditions.

Efficiency continues to improve. Beam quality continues to improve. New wavelengths become accessible. New applications emerge in fields we haven't even thought of yet.

From Einstein's 1917 theoretical prediction to today's fiber lasers cutting through steel and free electron lasers imaging molecules at the atomic scale, the laser has come an almost unimaginable distance in just over a century.

## Conclusion: The Exponential Trick

Right now, at this exact moment, there are hundreds of millions of lasers operating around the world. In your devices, in factories, in hospitals, in data centers, cutting steel, correcting vision, carrying the internet through fiber optic cables. Every single one of them works because photons can clone themselves.

But here's what really gets me about lasers:

They're all using the exact same quantum mechanical trick (stimulated emission) but the ways we've figured out how to trigger it are wildly different. You can make a laser by flashing bright light at a pink crystal. Or by running electricity through a gas. Or by dissolving colorful dye molecules in liquid. Or by injecting current into a semiconductor chip smaller than a grain of rice. Or by doping rare earth ions into a thin glass fiber. They look nothing alike. They're built from completely different materials using completely different methods. But at the quantum level, they're all doing the same thing: convincing atoms to make synchronized copies of photons.

It's like discovering that the same magic spell works whether you cast it with ruby, neon, organic molecules, or ytterbium ions. The universe doesn't care about the implementation details. If you can create population inversion and trap the light, stimulated emission will happen. Because that's just how quantum mechanics works.

And then there's the exponential part, which is both beautiful and terrifying.

One photon becomes two. Two become four. Four become eight. Exponential growth is always consequential in physics. It's what makes nuclear chain reactions possible, one neutron splits an atom, releases more neutrons, each splits more atoms. It's what makes epidemics spread. It's what makes compound interest powerful. Exponentials don't mess around.

In a laser, you're harnessing exponential amplification of light. You start with almost nothing (a few random photons going in the right direction) and within nanoseconds you have trillions of synchronized photons carrying kilowatts of power. That's the same mathematical process that makes atomic bombs work, except instead of neutrons splitting atoms, you have photons cloning themselves.

We've become so good at controlling this exponential process that we can build lasers with peak powers exceeding a petawatt, more power than every power plant on Earth combined, compressed into a femtosecond. We can focus that power to create conditions that only exist in the cores of stars. We're using it to attempt to ignite fusion reactions. The National Ignition Facility uses 192 lasers to compress hydrogen fuel, and they've achieved fusion ignition, the first time humans have created a fusion reaction that produces more energy than it consumes.

![Inside the National Ignition Facility target chamber. A technician stands on a platform for scale, dwarfed by the massive spherical chamber lined with laser beam ports.](/assets/images/laser-deep-dive/nif-target-chamber.webp)
*Inside the National Ignition Facility target chamber. Each of those circular ports delivers a laser beam. The technician gives you a sense of scale. Photo: Lawrence Livermore National Laboratory.*

Exponential amplification of light. It sounds almost innocent until you realize what it means.

Einstein discovered this process in 1917 while trying to make some equations balance. Forty-three years later, someone figured out how to make it happen on purpose. And now we're using it for everything from reading barcodes to potentially powering civilization.

From abstract quantum mechanics to cutting through steel to maybe, just maybe, unlimited clean energy.

Not bad for some synchronized photons.

---

*Want to go even deeper? Explore: quantum cascade lasers, optical parametric oscillators, Raman lasers, terahertz lasers, quantum dot lasers, polariton lasers, superradiant lasers, and more. The rabbit hole truly never ends.*
