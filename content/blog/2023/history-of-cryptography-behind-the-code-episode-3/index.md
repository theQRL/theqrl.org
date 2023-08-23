---
layout: blog-post
slug: history-of-cryptography-behind-the-code-episode-3
date: 2023-08-21
author: "The QRL Core Contributors"
title: "History of Cryptography, behind the code - Episode 3"
summary: "In this episode of History of Cryptography, we discuss the German engineer Arthur Scherbius' Enigma machine, which was initially intended for commercial usage but ended up playing a crucial role in the war. Throughout the war, the decoding of Enigma continued to give crucial intelligence, assisting the Allies in foreseeing German naval movements, fending off U-boat raids, and carefully planning their military actions."
featured_image: header.png
categories:
  - technical
  - video
series:
  - history-of-cryptography
toc: false
youtube: MI5bTle8Ntk
---

In the last episodes, we discussed various cryptographic cyphers used through history. We concluded with the invention of the [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine). 

This contraption, a brainchild of the German engineer [Arthur Scherbius](https://www.ithistory.org/honor-roll/dr-arthur-scherbius), was actually initially designed for commercial use. Little did Scherbius know that his invention would soon become a centerpiece in a global conflict. But let's not get ahead of ourselves. Before we dive into the world of Alan Turing, we must tip our hats to another key player in this saga - [Marian Rejewski](https://www.nsa.gov/History/Cryptologic-History/Historical-Figures/Historical-Figures-View/Article/1621548/marian-rejewski/).


**Marian Rejewski** and his colleagues at the Polish Cipher Bureau were the first successful codebreakers of an early generation Enigma machine. This was one of the first generation military Enigma models that the German military later came out in the late 1920s and early 1930s. These little guys had three rotors that could be adjusted to encrypt a message. Marian Rejewski and his team developed a device known as the "Bomba" and were able to start decoding messages as early as Christmas, 1932. 

{{< image "./images/bomba.png" >}}


And so we enter 1939. Alan Turing and his team at Bletchley Park begin their work cracking the next generation Enigma machine, only to find that the Germans had given it the modern equivalent of an extreme makeover. The Enigma machine now sported additional rotors and other hardware upgrades from previous models. Turing and his team responded by developing the Bombe, as opposed to the earlier bomba, machine. It was an electromechanical device capable of checking thousands of potential Enigma machine settings to identify the correct settings for each day. This was a game-changer in the effort to crack the Enigma codes and played a significant role in the Allied war effort. They knew that the Germans believed their cipher to be unbreakable, and this overconfidence was their Achilles heel.

{{< image "./images/bombe.png" >}}

Now, let's take a moment to appreciate the Bombe machine. It's technical datasheet may read a bit different from today's modern machines, but at the time, this was state of the art.

- Electrical Relays: These were the brawn behind its computational power, acting as switches to manipulate electrical currents for various calculations.
- Rotating Drums: Also known as "bomb wheels," these drums contained replicated versions of Enigma machine settings and were used to simulate the rotor configurations of the actual Enigma devices.
- Poles and Contacts: The Bombe's drums were equipped with poles and contacts that corresponded to the electrical pathways found in the Enigma machine. It was like having a cheat sheet for the complex rotor interactions of the Enigma.
Permutation Testing: The Bombe was a master of multitasking, systematically testing different combinations of rotor positions. It exploited the patterns and characteristics of the German military's message formats to eliminate unlikely settings, significantly reducing the computational load.
- Indicator Panel: The machine featured an indicator panel that displayed potential rotor settings and their corresponding indicators. This visual feedback allowed operators to track the progress of the decryption process and make adjustments as needed.
- Parallelism: To expedite the decryption process, the Bombe employed parallelism, meaning multiple instances of the Enigma machine were simulated simultaneously. It was like having multiple detectives working on the same case.
- Wiring and Switching: The Bombe employed intricate wiring and switching mechanisms to replicate the complex electrical connections and substitutions performed by the Enigma machine during encryption. This painstaking replication was crucial in deciphering the encoded messages.
So, there you have it. Alan Turing's invention, the Bombe machine, was ready to take on the Enigma. It was like David standing before Goliath, only this time, David had a supercomputer.

The year is now 1941. The United States has been reluctantly brought into the World War 2 chaos and the Soviets are kicking some serious Nazi axis in the Battle of Moscow. The code-breakers at Bletchley Park have a triumph of their own and finally crack the German Air Force's Enigma communications with their Bombe machine.

However, shortly after, for reasons not entirely known, the Germans begin changing their operational procedures, including the way they choose daily settings and the frequency with which they changed them. They also introduce more complex versions of the Enigma machine for different branches of the military, each with its own set of codes and settings. It was a bit like trying to crack a different language for each branch of the military.

By 1943, the Allies had intercepted a message known as the "Fish" that detailed German military plans for the Battle of Kursk. This intelligence allowed the Soviet Union to prepare a successful defense, leading to a decisive victory against the German forces. As the war progressed, the code-breaking efforts became increasingly collaborative. The British worked closely with their American counterparts, forming an exceptional alliance known as "Ultra".

The decryption of Enigma continued to provide vital intelligence throughout the war. The Allies were able to anticipate German naval movements, counter U-boat attacks, and strategically plan their military operations. The cryptographers at Bletchley Park made an immense impact on the outcome of World War II, saving countless lives and helping shape the course of history.

As World War II ended, the Enigma machine was eventually retired, its legacy enduring as a testament to the indomitable spirit of human intelligence in the face of adversity. The march of progress ushered in new encryption methods, pushing the Enigma into the annals of history.
Later, Turing hypothesized that the human brain functions akin to a digital computing machine. He further postulated that the human cortex, in its initial state, is an unstructured machine but can attain organization and transform into a universal machine through training and enough information. His reasoning let to a thought experiment called the Turing test, in which a human tries to determine if he or she is talking to a machine or another human.

In our forthcoming episode, we're set to journey into the captivating realm of Post-WW2 cryptography. We'll be uncovering how the evolution of modern ciphers has not just influenced the course of history, but also left a profound imprint on the fabric of human society. 

These cryptographic advancements have played a pivotal role in shaping the past, and our future. So, stay tuned for an enlightening exploration into the world of codes and ciphers.


The Enigma machine, invented by German engineer Arthur Scherbius, was initially designed for commercial use but became a centerpiece in the global conflict. The decryption of Enigma continued to provide vital intelligence throughout the war, helping the Allies anticipate German naval movements, counter U-boat attacks, and strategically plan their military operations. 