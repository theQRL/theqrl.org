---
layout: blog-post
slug: qrl-monthly-april-2024
date: 2024-05-12
author: "The QRL Core Contributors"
title: "QRL Monthly, April 2024"
summary: "Project Zond: XMSS JS Code Development, P2P Code Review and code streamlining involving removing non-essential beacon parameters, deprecated CLI flags, and more"
featured_image: header.png
categories:
  - technical
toc: true
---

## QRL Zond Development

In our latest development cycle, we've made significant strides in enhancing the stability, functionality, and security of both QRL Zond. 

Here are the key updates:

**Code Reviews and Enhancements:**

- Genesis initialization and Peer-to-Peer (P2P) communication code have been thoroughly reviewed.
- The Attestation Pool, State, and Initialization Sync code are under continuous review to ensure robust performance.
- Extensive updates and optimizations have been made to State Transition code, including slot skipping, epoch transitions, and validators' reward and penalty logic.

**Testing and Integration:**

- Go-Zond is undergoing rigorous testing; some tests are completed while others are still in progress.
- Qrysm has seen the addition of more tests to further ensure the reliability of the system.

**Code Streamlining:**

- Deprecated APIs, functionalities, and CLI flags have been removed from both Go-Zond and Qrysm.
- Non-essential beacon parameters and old consensus engines have been eliminated to streamline operations.
- XMSS implementation is currently being developed in Javascript, highlighting our commitment to cross-platform compatibility.

**Software Releases and Updates:**

- The PyScaffold version has been updated, leading to the release of QRL v4.0.4, marking another milestone in our project timeline.

These updates reflect our ongoing effort to refine and advance our blockchain technology, ensuring a secure, efficient, and scalable platform. Stay tuned for more updates as we continue to push the boundaries of blockchain innovation.

## Development changelog

> Note that this changelog represents the pull requests from the our main [organization repository](https://github.com/theQRL/), but don't reflect the work performed in each developers local repos that haven't been committed.

### theQRL/QRL

**[Updated setup.py to use pyscaffold 3.0.2](https://github.com/theQRL/QRL/pull/1781)**
			
- [[1cb77](https://github.com/theQRL/QRL/commit/83399f4fbba12ef1426129a276c95f3ff541cb77)] Updated setup.py to use pyscaffold 3.0.2		
- [[28976](https://github.com/theQRL/QRL/commit/b2536d655ba18c77711ee413ff2140b394c28976)] Merge pull request #1780 from cyyber/dev		

**[Updated setup.py to use pyscaffold 3.0.2](https://github.com/theQRL/QRL/pull/1780)**
			
- [[1486a](https://github.com/theQRL/QRL/commit/7600ec054edecc22f0b86b76b8e00f11a161486a)] Merge pull request #1778 from theQRL/dev
- [[1cb77](https://github.com/theQRL/QRL/commit/83399f4fbba12ef1426129a276c95f3ff541cb77)] Updated setup.py to use pyscaffold 3.0.2		

### theQRL/theqrl.org

**[QRL Weekly, 2024-April-23](https://github.com/theQRL/theqrl.org/pull/408)**
			
- [[40285](https://github.com/theQRL/theqrl.org/commit/def27c2744f0a7b8e01706d3b0234fd2e6f40285)] Quantum news mobile fix		
- [[e39f0](https://github.com/theQRL/theqrl.org/commit/8af29277861d298c716dfd629044505447ee39f0)] Set quantum news to use new Page content type		
- [[6f5ff](https://github.com/theQRL/theqrl.org/commit/77e1d851a00c37311020f444c7dde540a6a6f5ff)] Add quantum news item		
- [[8a1b9](https://github.com/theQRL/theqrl.org/commit/a3e019d7b5fd5daf11ec0c240ad815520c08a1b9)] QRL Weekly, 2024-April-23		


**[Add quantum news section](https://github.com/theQRL/theqrl.org/pull/407)**
			
- [[2e7eb](https://github.com/theQRL/theqrl.org/commit/c4c6e1356d935249e42fdd9ea6cd00e6efd2e7eb)] Add quantum  news section		
- [[16f37](https://github.com/theQRL/theqrl.org/commit/32a64e7d331c46441b884f2a1807ce88a0416f37)] Add quantum news data		


**[QRL Weekly, 2024-April-09](https://github.com/theQRL/theqrl.org/pull/406)**
			
- [[cf307](https://github.com/theQRL/theqrl.org/commit/72375bf0014d0c4be5b88e5d026e30d5f8fcf307)] Add the ability to archive blog posts		
- [[93ddc](https://github.com/theQRL/theqrl.org/commit/ad20974baddc1d81e4a7945737c2f949e0693ddc)] QRL Weekly, 2024-April-09		
- [[02dec](https://github.com/theQRL/theqrl.org/commit/8542950d0a1ca4c33b3efffbd7c48661f7b02dec)] Add quantum news update		
- [[f96cb](https://github.com/theQRL/theqrl.org/commit/d6cf6f32f244c183bf0cc152867f294b39ef96cb)] QRL Monthly, March 2024		


**[QRL Weekly, 2024-April-02](https://github.com/theQRL/theqrl.org/pull/405)**
			
- [[35f39](https://github.com/theQRL/theqrl.org/commit/b9ea49761d7298073233c28be99e22252cd35f39)] Quantum news update		
- [[d17af](https://github.com/theQRL/theqrl.org/commit/a7a89c8a0e2da20606189576d725ec23516d17af)] QRL Weekly, W14		
- [[9d253](https://github.com/theQRL/theqrl.org/commit/7b812ef6294ddc0286ddab19189f1be43ec9d253)] Add XT.com		
- [[bd68d](https://github.com/theQRL/theqrl.org/commit/47c05972afbeb7eb565b850d6b284740852bd68d)] QRL Weekly, W14		
- [[96c81](https://github.com/theQRL/theqrl.org/commit/cbd010269a5bea877485edb41751e163efc96c81)] Discord link cleanup		
- [[034c0](https://github.com/theQRL/theqrl.org/commit/566563d505ed2f20c96b9d966b908760c7e034c0)] SVG Cleanup		
- [[209dc](https://github.com/theQRL/theqrl.org/commit/aee483447fc19eaea9b132eb1cc77fc4ee6209dc)] Initial personnel cleanup/tidy

## Quantum News

{{% qnews start="2024-04-01" end="2024-04-30" %}}