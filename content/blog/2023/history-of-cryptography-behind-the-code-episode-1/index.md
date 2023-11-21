---
layout: blog-post
slug: history-of-cryptography-behind-the-code-episode-1
date: 2023-05-18
author: "Jack Matier"
title: "History of Cryptography, behind the code - Episode 1"
summary: ""
featured_image: header.png
categories:
  - technical
features:
  - nfts
toc: true
series:
  - history-of-cryptography
youtube: U0m65tUkMj8
---

From the ancient Romans to the battlefields of World War II, ciphers have been the custodians of humanity's most valuable secrets, guarding them against the relentless pursuit of those seeking to exploit them. With each passing century, ciphers have evolved and developed, driven by an unyielding conflict between those who seek to secure the purity of information and those who seek to exploit it. I’m Michael Strike, join us as we explore this fascinating blend of art, science, and mystery, from ancient substitution and transposition methods to modern algorithms based on advanced mathematics and computer science. Get ready to be captivated by the wonder and intrigue of cryptographic ciphers, a timeless reminder of the enduring power of secrets and their keepers.

Here is a list of different types of cryptography used from the end of the Roman Empire to before World War II, in chronological order:

## CAESAR CIPHER (50BC)

Let's start by discussing the Caesar cipher. The Caesar cipher is a substitution cipher, meaning that it replaces each letter in a message with another letter a fixed number of positions down the alphabet. For example, if the shift value is 3, then every "A" would be replaced with a "D," every "B" with an "E," and so on.

To better understand how the Caesar cipher works, let's take a look at an example. Suppose we want to encrypt the message "HELLO" using a shift value of 3. The first step is to write out the alphabet and shift it down by three positions:

Plain: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`\
Cipher: `DEFGHIJKLMNOPQRSTUVWXYZABC`

Now, we can substitute each letter in the message with the corresponding letter in the cipher alphabet:

Plain: `H E L L O`\
Cipher: `K H O O R`

The resulting encrypted message is "KHOOH." To decrypt the message, we simply shift the cipher alphabet back by three positions and substitute the letters back to their original form.

### Compromise

Modern technology can break a Caesar cipher by brute force methods, in which every possible key is tried until the correct one is found through text analysis. This is done by exploiting the fact that there are only 25 possible keys in a Caesar cipher, making it a relatively easy cipher to break. 

Another method to break the caeser cipher is through frequency analysis

1. Count the frequency of each letter in the ciphertext.
1. Compare it to the expected frequency of letters in the English language.
1. Guess the shift based on the most frequent letter(s) in the ciphertext.

### Plaintext attack

If you have a piece of the plaintext that corresponds to the ciphertext, you can easily figure out the shift and then decrypt the whole message.

At the time, the Ceasar cipher was state of the art. But end of day, how secure can something named after a salad really be?

## Scytale cipher (5th century BC)

The Scytale cipher is named after the tool that was used to create it, a cylindrical rod called a Scytale. The Scytale was used by the Spartans as a way of communicating securely during military campaigns.

To use the Scytale cipher, a long strip of parchment or leather would be wrapped around the Scytale and the message would be written lengthwise along the strip. When unwrapped, the message would appear to be a jumbled mess of letters, but when wrapped around another Scytale of the same size, the message would be revealed.

This is an example of a transposition cipher, which means that it rearranges the order of letters in the message rather than replacing them with new characters. The Scytale cipher was a simple yet effective way of encrypting messages during the time it was used.

The Scytale cipher was used by other ancient civilizations, including the Greeks and the Romans. It was eventually replaced by more sophisticated ciphers, but the Scytale cipher's legacy lives on as a testament to the ingenuity of ancient scholars and scribes…. that had access to a slip of paper and a stick.

The Scytale cipher was eventually cracked by the Persians during the Greco-Persian wars, who were able to reverse-engineer the encryption method by creating their own sticks of the same size and shape.

While the Scytale cipher may seem rudimentary by today's standards, it played a crucial role in the history of cryptography and set the stage for more complex encryption methods that would be developed in later centuries.

In fact, the principles behind the Scytale cipher are still used today in modern encryption methods, such as the Data Encryption Standard (DES) and the Advanced Encryption Standard (AES).

### Compromise

In contrast, modern technology can break the Scytale cipher easily because it relies on a fixed size rod, which is a weakness that can be exploited with algorithms and computing power. By analyzing the patterns and frequency of letters, modern computer algorithms can break the Scytale cipher within a few seconds.

## ATBASH (AT-BASH) CIPHER (500BC)

The Atbash cipher is a substitution cipher that was first used in the Hebrew language. The cipher works by substituting the first letter of the alphabet with the last, the second with the second-to-last, and so on. For example, in English, "A" would be substituted with "Z", "B" with "Y", and so on. Used primarily by Jewish scribes and scholars in ancient times to encode messages in the Torah and other holy texts, It was also considered to be a sacred method of encryption and was used to protect sensitive information from being accessed by unauthorized individuals.

Host: The name "Atbash" comes from the first and last letters of the Hebrew alphabet, "Aleph" and "Tav". When these two letters are switched using the Atbash cipher, they create a new word, "Sheshach", which is a biblical reference to the city of Babylon. But the Atbash cipher is not limited to the Hebrew language, oh no. It can be used to encode messages in any language that uses a standard alphabet. For example, in English, "A" would be replaced with "Z", "B" with "Y", and so on.

One of the most interesting things about the Atbash cipher is that it is incredibly simple to use and does not require any special equipment or software, which is good because equipment and software were very limited during the time of the Hebrews. All that is needed is a basic understanding of the alphabet and the ability to substitute letters using the Atbash method.
But, the simplicity of the Atbash cipher also makes it vulnerable to being cracked by skilled and unskilled codebreakers. With enough time and resources, it is possible to decode an Atbash-encoded message and reveal its hidden meaning.

Today, the Atbash cipher is still studied and used by cryptographers and codebreakers as a historical example of a simple yet effective method of encryption. It may not be as widely used as other, more complex ciphers, but its legacy lives on as a testament to the ingenuity and creativity of ancient scholars and scribes.
COMPROMISED:

In general, I can say that the Atbash cipher is a simple substitution cipher that reverses the order of the alphabet. Modern technology can easily break this cipher using frequency analysis, which involves counting the occurrence of letters in the ciphertext and comparing it to the frequency of letters in the English language.

## POLYBIUS SQUARE (3rd century BC)

Host: The Polybius square is yet another cryptographic device used to encode messages. Coincidentally, it was invented by the ancient Greek historian and scholar, Polybius, of the same name, during the second century BC. Polybius was interested in creating a cipher that could be used by military commanders to send secret messages to one another without the risk of interception or decoding by enemy forces.
Host: So, what exactly is the Polybius square and how does it work? Well, it's a simple grid made up of five rows and five columns. Each cell in the grid contains a letter of the alphabet, except for the fifth row, which contains the letters "K", "W", "X", "Y", and "Z". The letters are arranged in a specific order, with "A" in the top-left corner and "J" in the bottom-right corner.

To use the Polybius square, a message is first written out in plain text. Then, each letter of the message is replaced with its corresponding grid coordinates. For example, the letter "A" would be replaced with "11", the letter "B" with "12", and so on. The resulting string of numbers can then be transmitted securely, as long as the recipient knows how to decode it.
Host: Decoding the message is just as simple. The recipient uses the Polybius square to convert each pair of numbers back into its corresponding letter. For example, "11" would be converted back to "A", "12" would be converted back to "B", and so on. The resulting message can then be read in plain text.
But why was the Polybius square effective at encoding messages? The answer lies in its simplicity. Unlike other ciphers that relied on complex algorithms or mathematical formulas, the Polybius square could be easily memorized and quickly deciphered. This made it an ideal tool for military commanders who needed to send and receive messages quickly and securely.
Despite its effectiveness, the Polybius square was not foolproof, not. Even. Close. ... Like all ciphers, it could be cracked with enough time and resources. In fact, during World War II, the Polybius square was used by the Germans to encode messages, but it was eventually broken by Allied codebreakers.
Today, the Polybius square is still studied by cryptographers and codebreakers as a historical example of a simple yet effective cipher. It may not be used by military commanders anymore, but its legacy lives on as a testament to the ingenuity and creativity of ancient scholars like Polybius.

## Vigenère cipher (16th century)

Ah, the Vigenère cipher - the fancy cipher that makes all those basic mono-alphabetic ciphers, just look silly. Invented by a French diplomat and cryptographer named Blaise de Vigenère way back in the 16th century (before social media and even before Netflix), this cipher was like the holy grail of encryption back in the day.

The Vigenère cipher is like a sneaky little puzzle mastermind - it uses multiple alphabets to encrypt a message, and each letter is shifted a certain number of places based on a secret key word. The key word is repeated over and over again until it matches the length of the message being encrypted, like a secret code word between friends.

Unlike earlier ciphers, the Vigenère cipher was a tough nut to crack, even for the brightest minds of the day. It didn't rely on a fixed pattern, so traditional frequency analysis techniques were useless in trying to decrypt the message. This cipher was used for military and diplomatic communications during the Renaissance period and remained unbreakable for over 300 years - until a British cryptographer named Charles Babbage finally cracked it in the mid-19th century.

One of the interesting things about the Vigenère cipher is that it was actually used by the Confederacy during the American Civil War, but was later cracked by Union cryptographers using frequency analysis. Oops.
Despite its age, the Vigenère cipher still holds a special place in the hearts of cryptographers everywhere. In fact, its principles are still used in modern encryption methods like the RSA algorithm and the Advanced Encryption Standard (AES). Not shabby for a cipher that's older than the United States!

## Playfair cipher (1854)

The Playfair cipher is a polygraphic substitution cipher, which means that it replaces pairs of letters rather than individual letters. It was named after its creator's friend, Baron Playfair, who was the British ambassador to Russia at the time.

Host: The Playfair cipher works by using a 5x5 grid of letters, where each letter of the alphabet is used once and one letter is omitted. The letters of the key phrase are then used to fill in the remaining spaces in the grid.
To encrypt a message, the plaintext is divided into pairs of letters, and each pair is then mapped onto the grid. If both letters are in the same row or column of the grid, they are replaced by the letters to their right or below, respectively. If the letters are not in the same row or column, they are replaced by the letters at the opposite corners of the rectangle formed by their positions.

The Playfair cipher was widely used during World War I and World War II by the British and American militaries, and it remained unbreakable for many years. However, as with all encryption methods, it eventually became vulnerable to more sophisticated attacks, and it was largely replaced by other encryption methods in the modern era.

Host: The Playfair cipher has also been featured in popular culture, including in the novel "The Da Vinci Code" and the TV series "Sherlock.

## One-time pad (1882)

The One-time pad was first invented in 1882 by the American inventor and telegraph operator, Frank Miller. It works by using a random and secret key that is only used once, hence the name "One-time pad".

To encrypt a message using the One-time pad, each letter of the plaintext is combined with a letter from the key using modular addition, where each letter is assigned a number according to its position in the alphabet (A = 0, B = 1, C = 2, and so on). The resulting number is then converted back into a letter.

The key used in the One-time pad must be random and at least as long as the plaintext being encrypted. The key can only be used once and must be kept completely secret from anyone who might try to intercept or decode the message.
The One-time pad is considered to be unbreakable because there is no mathematical relationship between the plaintext and the key, and each key is used only once. This means that even if someone intercepts the ciphertext, they cannot use frequency analysis or any other technique to decipher the original message.

The One-time pad was used extensively during World War II by both the Allies and the Axis powers, and it remains a popular encryption method among intelligence agencies and military organizations today.

However, the One-time pad is not without its drawbacks. It requires a truly random key that is at least as long as the plaintext, which can be difficult to generate and transmit securely. Additionally, if the key is compromised in any way, the entire system is compromised, which makes the One-time pad vulnerable to a variety of attacks

Oh, and there is also that whole thing about if you are actually able to sneaker net the key to the receiving party in order to transmit the message, maybe you should have just sent the message  instead.

## Hill cipher (1929)

The Hill cipher was invented in 1929 by Lester S. Hill, an American mathematician who was interested in developing a more secure encryption method than those that were currently in use.

The Hill cipher works by using linear algebra to transform blocks of letters into ciphertext. Unlike other encryption methods that use substitution or transposition to scramble letters, the Hill cipher uses matrix multiplication to perform the encryption. No. Not that Matrix.

To encrypt a message using the Hill cipher, the plaintext is first divided into blocks of n letters, where n is the size of the key matrix. The key matrix is a square matrix that is randomly generated by the sender and is kept secret.

The plaintext blocks are then multiplied by the key matrix using modulo arithmetic, where each letter is assigned a numerical value according to its position in the alphabet (A = 0, B = 1, C = 2, and so on). The resulting values are then converted back into letters to form the ciphertext.

The Hill cipher is considered to be very secure because the key matrix must be known in order to decrypt the message, and it is very difficult to determine the key matrix from the ciphertext alone.

However, the Hill cipher has some limitations. It is vulnerable to attacks if the key matrix is not truly random or if it is too small. Additionally, if the size of the key matrix is not carefully chosen, the encryption process can be very slow and cumbersome.
Despite these limitations, the Hill cipher was an important step forward in the world of cryptography and helped pave the way for more advanced encryption methods that use linear algebra, such as the Advanced Encryption Standard (AES).

## Enigma machine (1918-1945)

The Enigma machine was invented in the early 20th century by Arthur Scherbius, a German engineer with obvious trust issues, who wanted to create a more secure encryption method than those that were currently in use.

The Enigma machine worked by using rotors to scramble plaintext into ciphertext. Each rotor contained a set of electrical contacts that would change the letter of the alphabet based on its position in the rotor. This meant that each letter was encrypted differently each time it was used, making it very difficult to decode.
The Enigma machine was initially used by the German military during World War II to encrypt their communications. The machine was so effective that it was considered to be unbreakable, and the German military used it to send top-secret messages to their forces all over the world.

However, the Enigma machine was eventually cracked by a team of cryptographers led by Alan Turing, a British mathematician and scientist. Turing and his team were able to break the Enigma code by using a combination of clever mathematics, brute force, and a specially designed machine called the Bombe, or bombe. To be honest, I’m not really sure how its pronounced.

Turing's work was so important that it is considered to be one of the key factors in the Allies' victory in World War II. By breaking the Enigma code, the Allies were able to intercept and decode German communications, which gave them a significant advantage on the battlefield.
After the war, the Enigma machine fell out of use as more advanced encryption methods were developed. However, the legacy of the Enigma machine lives on, and it remains an iconic symbol of the power of cryptography and codebreaking.

Today, the Enigma machine is still celebrated by enthusiasts and hobbyists who build and collect replicas of the original machine, and it has even inspired movies and television shows, such as the Oscar-winning film "The Imitation Game".
Note that there were many other cryptographic techniques used during this time period, but these are some of the most well-known and significant.