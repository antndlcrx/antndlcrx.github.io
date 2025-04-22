---
title: Oxford LLMs Materials
author: maksim
date: 2024-05-23
categories: [Programme, Materials]
tags: [programme, fundamentals, alignment, interpretability, peft, prompts, llama2]
pin: true
image:
  path: /assets/img/logo/logo_llms_light.jpg

---

This collection brings together lecture slides, workshop materials, and practical guides from our past iterations of the "Oxford LLMs" summer school for social sciences. The content spans foundational concepts to advanced applications—from transformer architectures and model interpretability to fine-tuning techniques and LLM agent systems. Whether you’re exploring core NLP principles or specialized implementations like retrieval-augmented generation, these materials provide both theoretical grounding and hands-on guidance. All resources are openly available for researchers, practitioners, and students working with LLMs in their research!


## 2024

Building on the 2023 program, the materials in 2024 feature both the fundamentals of LLMs, applied tutorials, and recent advancements. Particularly, the program delves deep into foundational concepts in model architecture and evaluation. Subsequent lectures explore agent-based systems and advanced fine-tuning techniques. The practical components address specialized applications including retrieval-augmented generation for social science research, implementation of observability tools, and workflow development for LLM agents. Technical deep dives cover the Gemini architecture and practical considerations for self-hosting models, providing end-to-end perspectives on contemporary LLM applications. **Grigory Sapunov**, **Tatiana Shavrina**, and **Ilya Boytsov** developed the lecture materials, with seminar contributions from **Atita Arora**, **John Githuly**, **Christian Silva**, and **Ciera Fowler**. See the full list of materials below:

### Lectures

- [Introduction to LLMs](https://docs.google.com/presentation/d/1avuQJE-Gf8t0an-sinXqkvKjzv1u4rLpO94ONOE_Vx4/edit#slide=id.p) by Grigory Sapunov.

- [LLM Evaluation](https://docs.google.com/presentation/d/1n_wwOPwbK9FPkVMKGA9Vneya4Jaf4lh13D9YO9byves/edit#slide=id.g303d6023e88_1_58) by Tatiana Shavrina.

- [LLM Agents](https://docs.google.com/presentation/d/10-6Erne_Fo62y2i4OOEaNkGTrcEEIk9sOObuSJlhR80/edit#slide=id.g303d938f784_1_58) by Tatiana Shavrina.

- [LLM Agents (continued)](https://docs.google.com/presentation/d/1Zlt3ARDbGBhVvmPaz7omaj6MlXIlIOFs7wm6P8GGrpc/edit#slide=id.p) by Grigory Sapunov.

- [Fine-Tuning and Alignment](https://docs.google.com/presentation/d/1-Kf059z24W65GgPNbjw6vOvABFOdxFf4BD_Hsenc-U8/edit) by Ilya Boytsov.


### Seminars

- [Navigating RAG for Social Science](https://docs.google.com/presentation/d/1ngAVq0Ks3_rgDw5Qnif_A483G6M6RoL2shVklabrYDI/edit#slide=id.g1ff45be8172_1_0) by Atita Arora.

- [LLM Observability and Evaluation](https://docs.google.com/presentation/d/1wCGSwBqo4iNx_MQXwQLHRyVW__t8UlMU9K6HPLmq4hM/edit#slide=id.g2f39ad35ae4_0_641) by John Githuly.

- [Tutorial: Creating LLama-Researcher using LlamaIndex workflows](https://github.com/Jgilhuly/Llama-Researcher) by John Githuly.

- [Gemeni Model Deep Dive](https://docs.google.com/presentation/d/1-_vJmcpJjDAY5zh60DR834yUwYyR-XlSZ5amC0sLfZg/edit?usp=sharing) by Christian Silva.

- [ORI's Guide to Self Hosting LLMs](/assets/presentations/oxford_llm_lecture_fowler.pdf) by Ciera Fowler.



## 2023

The 2023 program covers fundamental and applied aspects of transformer-based language models, tracing their evolution from the 2017 seminal "Attention is all you need" paper to contemporary systems like Chat-GPT. Lectures created by **Elena Voita** examine critical challenges including model bias, interpretability methods, and alignment techniques. Practical seminars designed by **Ilya Boytsov** provide hands-on experience with transformer models, from basic fine-tuning approaches to advanced methods like parameter-efficient adaptation. Additional sessions explore specialized applications including prompt engineering, classic NLP pipelines, and reinforcement learning for model detoxification. See the full list of materials below:

### Lectures

The following lecture materials were and created by [Elena Voita](https://lena-voita.github.io/).
- [The Evolutionary Journey of NLP](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/lectures/day_1/The%20Evolutionary%20Journey%20in%20NLP.pdf) from rule-based systems to modern Transformers-based models, which are the core technology underpinning LLMs. 
- [Bias in LLMs and a (bit of) Interpretability](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/lectures/day_2/Bias%20in%20LLMs%20and%20interpretability.pdf). 
- [LLMs and Alignment.](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/lectures/day_3/Prompt%20engineering%2C%20RHLF%2C%20ChatGPT.pdf)


### Seminars

The following workshop materials were designed and implemented by [Ilya Boytsov](https://www.linkedin.com/in/ieboytsov/).

- [Google Collab environment setup, general intro](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_1/0_Env%20setup%20and%20intro.ipynb)
- [Introduction to Huggingface transformers library](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_1/1_Intro%20to%20transformers.ipynb)
- [Topic modelling with Transformers using BERTopic library](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_1/2_Topic%20modelling%20with%20transformers.ipynb)
- [A guide how to fine-tune pretrained model for a classification task](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_1/3_Fine%20tune%20pretrained%20model.ipynb)
- [Parameter Efficient Fine Tuning (PEFT)](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_2/4_Parameter%20efficient%20fine%20tuning.ipynb)
- [Transformers interpretability, Attention visualisation, and saliency methods (e.g. Integrated gradients)](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_2/5_Transformers%20interpretability.ipynb)
- [Model analys with classic NLP using Spacy](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_2/6_Sentiment%20analysis%20with%20classic%20NLP.ipynb)
- [Prompts and instructions with Llama 2](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_3/7_Prompts%20and%20instructions%20with%20Llama%202.ipynb)
- [Detoxifying summarisation model with Reinforcement Learning from Human Feedback (RLHF)](https://github.com/antndlcrx/oxford-llms-workshop/blob/main/materials/seminars/day_3/8_LLMs%20alignment%20with%20RLHF.ipynb)
