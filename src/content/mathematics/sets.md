---
title: "Sets as a Category"
chapter: 2
section: "Foundations"
description: "Objects, morphisms, identity, and composition."
draft: false
---

# Sets as a category

Just like everything else, we will start with thinking about sets. Now I won't be going down and defining sets and set operations rigorously. I expect the reader to know the basics related to sets[^1]. Here we are more interested in looking at sets from a categorical persepctive or understanding structures in teh category SETS. This will serve as a foundation for when we'll study other categories. We start by defining a category.

## Categories

**Definition 2.1:** A category $\mathcal{C}$ is a collection of objects and morphisms between the said objects that must follow some properties. before stating the properties, we will first define notation. The collection of all objects is written as $\text{Obj}(\mathcal{C})$, for any two objects $A,B\in\text{Obj}(\mathcal{C})$, we denote the collection of morphisms from $A$ to $B$ as $\text{Hom}_{\mathcal{C}}(A,B)$. Thus we tate the properties:$\forall A,B,C,D\in\text{Obj}(\mathcal{C})$,

- $\exists!\text{Id}\in\text{Hom}_{\mathcal{C}}(A,A)$, such that $\forall f\in\text{Hom}_{\mathcal{C}}(A,B),f\circ\text{Id}=f$ and $\forall f\in\text{Hom}_{\mathcal{C}}(C,A),\text{Id}\circ f=f$
- $\forall f\in\text{Hom}_{\mathcal{C}}(A,B),\forall g\in\text{Hom}_{\mathcal{C}}(B,C),\exists h\in\text{Hom}_{\mathcal{C}}(A,C):h=g\circ f$
- $\forall f\in\text{Hom}_{\mathcal{C}}(A,B),\forall g\in\text{Hom}_{\mathcal{C}}(B,C),\forall h\in\text{Hom}_{\mathcal{C}}(C,D):h\circ\left(g\circ f\right)=\left(h\circ g\right)\circ f$

It becomes trivial how the collections of sets and set functions make a category.

## Initial and Final objects

The first construction that we are interested in is something called the initial in the category.

**Definition 2.2:** The initial object in a category $\mathcal{C}$ is an object $A\in\text{Obj}(\mathcal{C})$, such that $\forall B\in\text{Obj}(\mathcal{C})$, there exists a unique $f\in\text{Hom}_{\mathcal{C}}(A,B)$.

Simillarly we a construction called a final in the category

**Definition 2.3:** The final object in a category $\mathcal{C}$ is an object $A\in\text{Obj}(\mathcal{C})$, such that $\forall B\in\text{Obj}(\mathcal{C})$, there exists a unique $f\in\text{Hom}_{\mathcal{C}}(B,A)$.

Hence we ask what are finals and initials in the category of sets. The empty set is an initial in the category, and a set just containing one element such as $\{a\}$ are finals. How do we show this ?

**Theorem 2.4:** $\phi$ is an initial in SET and $\{a\}$ is a final in SET.

**Proof:** we can vacuously make a morphism from the empty set to any set, as there is nothing in the empty set that can be mapped. This functions is trivially unique (because there is no element in the domain)

For the final $\{a\}$, I can take any set just map everything to $a$. We show that this function is unique. for any set $A$, let $f:A\to\{a\}$ be teh function we defined before. Let $g:A\to\{a\}$ be another function. thus consider $\forall\alpha\in A,$the two outputs $f(\alpha)$ and $g(\alpha)$. Since $\{a\}$ is a singelton, there is only possible candiate for the images which is $f(\alpha)=a=g(\alpha)$. Thus showing that the functions are the same.$\square$ QED :)

But an interesting point rises now, consider the set $\{b\}$, it is clearly not the set $\{a\}$, but by the same logic above, I can map $\{a\}$ to $\{b\}$and $\{b\}$to $\{a\}$, by what I expect you'll call a bijective function, that is true. So the question arises are the finals and initials unique ? Because there is nothing else that is bijective to $\phi$. To answer this we first define epimorphisms, monomorphisms and isomorphism.

## Epi-, Mono- and Isomorphisms

**Definition 2.5:** A morphism $f\in\text{Hom}_{\mathcal{C}}(A,B)$ is called an epimorphism if $\forall Z\in\text{Obj}(\mathcal{C}),\forall\alpha',\alpha^{\prime\prime}\in\text{Hom}_{\mathcal{C}}(B,Z)$, the following is true



$$
\alpha'\circ f=\alpha^{\prime\prime}\circ f\implies\alpha'=\alpha^{\prime\prime}
$$



Simillarly

**Definition 2.6:** A morphism $f\in\text{Hom}_{\mathcal{C}}(A,B)$ is called a monomorphism if $\forall Z\in\text{Obj}(\mathcal{C}),\forall\alpha',\alpha^{\prime\prime}\in\text{Hom}_{\mathcal{C}}(Z,A)$, the following is true



$$
f\circ\alpha'=f\circ\alpha^{\prime\prime}\implies\alpha'=\alpha^{\prime\prime}
$$



The definitions, at first look scary and seem to be desrcibing a derranged property of the morphism, but before going further, we will show that they correspond to surjectivity and injectivity in the case of SETS

**Theorem 2.7:** In the case of SETS, A function is an epimorphism iff it is surjective.

**Proof:** Suppose a function $f:A\to B$ is an epimorphism in SETS, then for contradiction suppose that $f$ is not surjectve. Thus let $X=\{0,1\}$ and we define $g$ and $h$ as



$$
\forall b\in B:g(b)=0
$$





$$
\forall b\in B:h=\begin{cases}
0 & b\in\text{Im}(f)\\
1 & b\not\in\text{Im}(f)
\end{cases}
$$



Then clearly we have that $g\circ f=h\circ f$ but $g\neq h$. Thus showing a contraditiction. Hence if $f$ is an epimorphism, then $f$ is surjective in sets

Now suppose $f$ is surjective, then suppose $\exists g,h:B\to X$ such that $g\circ f=h\circ f$, thue we want to show $\forall b\in B:g(b)=h(b)$. hence consider $\forall b\in B$, we have that $\exists a\in A$ such that $f(a)=b$, further we know that $g\circ f(a)=h\circ f(a)$, therefoe we have that



$$
g(b)=g\circ f(a)=h\circ f(a)=h(b)
$$



hence showing what was asked.$\square$

We show a simillar proposition for monomorphisms in sets.

**Theorem 2.8:** In the case of SETS, A function is a monomoprhism iff it is injective.

**Proof:** Suppose $f:A\to B$ is injective, then by definition, we have that $\forall x,y\in A,f(x)=f(y)\implies x=y$, therefore $\forall g,h:X\to A,\forall x\in X$, if $f\circ g(x)=f\circ h(x)\implies g(x)=h(x)$, thus showing $f$ is a monomorphism.

Suppose $f$ is not injective. Then consider $X=\{0,1\}$ and let $a_{1},a_{2}\in A$ be such that $f(a_{1})=f(a_{2})$ but $a_{1}\neq a_{2}$. Thus define $g,h$ as follows



$$
\forall x\in X:g(x)=a_{1}
$$





$$
\forall x\in X:h(x)=a_{2}
$$



Therefore we have that $f\circ g=f\circ h$ but $g\neq h$, hence $f$ is not a monomorphism. Thus showing that $f$ is a monomorphism iff $f$ is injective in sets.$\square$

Now we define an isomorphism.

**Definition 2.9:** An isomorphism is a morphism $f\in\text{Hom}_{\mathcal{C}}(A,B)$ that has both a left and right inverse, that is $\exists g\in\text{Hom}_{\mathcal{C}}(B,A)$ such that $g\circ f=\text{Id}_{A}$ and $f\circ g=\text{Id}_{B}$.

It can be easily shown that this inverse in unique. We denote this unique inverse as $f^{-1}:B\to A$. The relation between the three terms “isomoprhism”,“epimorphism” and “monomorphism” is as follows

**Theorem 2.10:** If $f\in\text{Hom}_{\mathcal{C}}(A,B)$ is an isomorphism, then $f$ is an epimorphism and a monomprohism

**Proof:** Suppose $f$ is an isomorphism, then suppose $g,h\in\text{Hom}_{\mathcal{C}}(X,A)$ and $f\circ g=f\circ h$, therefore we have that



$$
f\circ g=f\circ h\implies f^{-1}\circ f\circ g=f^{-1}\circ f\circ h\implies\text{Id}_{A}\circ g=\text{Id}_{A}\circ h\implies g=h
$$



Therefore, we have that $f$ is a monomorphism. Now suppose $g,h\in\text{Hom}_{\mathcal{C}}(B,X)$ and $g\circ f=h\circ f$, therefore we have that



$$
g\circ f=h\circ f\implies g\circ f\circ f^{-1}=h\circ f\circ f^{-1}\implies g\circ\text{Id}_{B}=h\circ\text{Id}_{B}\implies g=h
$$



Thus showing that $f$ is an epimorphism.$\square$

One is tempted to say that the above theorem is an if and only if, unsatisfyingly, that is untrue. Later in the text, we'll look at the category RING in which it breaks. The one does have the satisfaction of saying that in SETS, and other simillar nice categories, the above theorem is an if and only if.

Thus to answer the original question, we have that in the case of SETS, we have a unique initial object and a final object which is unique upto isomorphism. We show the uniqueness upto isomporhism of initial and final objects if distinct initial and final objects exist in a general conetxt.

**Theorem 2.11:** If $A,B$ are two distinct initial/final objects in a category, then they are isomorphic i.e. have an isomorphism between them.

**Proof:** First we show it for initial objects, Suppose $A$ and $B$ are distinct initial objects. Therefore we have that there exists a unique $f_{A}:A\to B$ and simillarly a unique $f_{B}:B\to A$, thus we have that $f_{A}\circ f_{B}:B\to B$ and $f_{B}\circ f_{A}:A\to A$. Since $A$ and $B$ are initial, we have that there is a unique morphism from $A$ to itself and $B$ to itself which are $\text{Id}_{A}$ and $\text{Id}_{B}$ respectively, therefore we have that $f_{A}\circ f_{B}=\text{Id}_{B}$ and $f_{B}\circ f_{A}=\text{Id}_{A}$. Therfore showing that $f_{A}$ has both right and left inverses, thus $f_{A}$ is an isomorphism and $A$ and $B$ are isomorphic

Now we show it for final objects, Suppose $A$ and $B$ are distinct final objects. Therefore we have that there exists a unique $f_{A}:A\to B$ and simillarly a unique $f_{B}:B\to A$, thus we have that $f_{A}\circ f_{B}:B\to B$ and $f_{B}\circ f_{A}:A\to A$. Since $A$ and $B$ are final, we have that there is a unique morphism from $A$ to itself and $B$ to itself which are $\text{Id}_{A}$ and $\text{Id}_{B}$ respectively, therefore we have that $f_{A}\circ f_{B}=\text{Id}_{B}$ and $f_{B}\circ f_{A}=\text{Id}_{A}$. Therfore showing that $f_{A}$ has both right and left inverses, thus $f_{A}$ is an isomorphism and $A$ and $B$ are isomorphic. Thus showing what was asked.$\square$

**Note:** It is to be noted that we only needed the idea of an isomorphism to prove the previous theroem, nevertheless we first discussed epimorphisms and monomorphisms first. This is primarily because of three reasons: 1) as we showed, in SETS, they correspond to surjectivity and injectivity respectively, and in the same way it would feel incomplete to talk of bijectivity without injectivity and surjectivity, it felt incomplete to talk about isomorphisms without those two. The more important reason is however that 2) we will encounter these constructions latter on (particullary when talking about short exact sequences, homology, complexes and simillar stuff) and 3) the current context gave an easier way to present them to the reader.

To further talk about initial and final objects in a category, The reader should note that it is not necessary that all categories must have initial or final objects. These are additional structures that a catgeory may or may not possess. The same can also be true for other structures that we'll introduce in this chapter. Thus it makes it necessary, that for each category that we talk about, we look if the constrcutions we like still exist in those categories. Hence, teh reader must keep in mind, that constructions in one category might motivate what the same construction might look like in another catgeory, but we still have to establish it's existence, by showing that the new construction actually makes sense in the latter category.

Before looking at further structures, I would introduce an abuse of notation and some terminology. After this we'll look at product construction and quotient construction.

We abuse notation and define the following:

- I will use this symbol $\hookrightarrow$ to denote either an inclusion, an injective function or a monomorphism depending on the context. If I am allowed to define an inclusion in a very hand wavy way, then I would say that the inclusion of $H$ into $G$ is just writing the elements of $H$ inside $G$, or changing the context of $H$ such that now elements in $G\backslash H$ are also in the context. This is better explained by an example: Let $H$ be the set of all even integers. Now we when a person is just talking about $H$, any numbers in the context can plainly be assumed to be of the form $2k$ for some $k\in\mathbb{Z}$. Now consider the inclusion of $H\hookrightarrow\mathbb{Z}$, now we expand the scope/context/universe of $H$ to the whole of $\mathbb{Z}$ and consider $H$ as a subset of $\mathbb{Z}$. The difference is that: earlier we were just talking about $H$, now we are talking about $H$ as existing within a larger context of $\mathbb{Z}$. The inclusion would be helpful exactly in this way i.e. when we would like to talk about sub structures in a larger structure, or place structures in a larger structure through inclusion. We will also consider the following cases as inclusion: Say structures $A$ and $B$ are isomorphic and $B\hookrightarrow C$, Inside this text we are allowed to say that $A\hookrightarrow C$. Unless this “indirect” inclusion is trivial, we would first mention the isomorphism needed.
- The second abuse of notation that one might expect to show up is using the symbol $\twoheadrightarrow$ to denote that a morphism is surjective or an epimorphism. It would usually be clear form context what we mean, in uncertain cases we will clear the meaning.
- To denote an ismorphism we will frequently use the notation $\xrightarrow{\sim}$. The $\sim$ sign is supposed to show approxametly. Hence the arrow is saying “these two objects are approximately the same thing”. The idea being that there are different types of equality.

Let's move on.

## The Quotient structure

### Construction

Before constructing the quotient structure, I would first like to introduce the reader to the idea of universal properties. Ideally I would be telling you about functors but I prefer not to overload the reader with abstraction. Thus currently I will give a non rigorous idea of universal properties. A universal property in a category $\mathcal{C}$ is a statement that established a property held universally by the objects and morphisms of the category given in a particular arrangement. Hence one might expect a universal property to go something like “In the category $\mathcal{C}$, such and such object exists, which under under certain conditions, upholds certain consequences”. The “structures” that we are talking about are universal properties.

Hence the first structure that we are interested in, and perhaps one of the more interesting structures, is the quotient structure.

**Definition 2.12:** We say that a relation $\sim$ on $A$ is an equivalence relation, if it satsfies these three properties

- **Reflexivity:** $\forall a\in A:a\sim a$ is True
- **Symmetric:** $\forall a,b\in A:a\sim b\implies b\sim a$ is True
- **Transivity:** $\forall a,b,c\in A:\left(a\sim b\text{ and }b\sim c\right)\implies a\sim c$

Consider a set $A$ with an equivalence relation $\sim$. Thus based on the equivalence relation, given any $a\in A$, we define equivalnce classs $[a]$

**Definition 2.13:** Given an set $A$ with an sequivalence relation $\sim$, we define the equivalence relation of any element $a\in A$ as the subset $\left\{ b\in A\vert a\sim b\right\} $. We denote it using $[a]$.

Thus we note that an equivalence relation partitions the set in equivalance classes.

**Theorem 2.14:** An equivalence relation $\sim$ partitions the set $A$ i.e. if the equivalence classes $[a]$ and $[b]$ are distinct then they are disjoint.

**Proof:** Clearly suppose for some equivalence classes $[a]$ and $[b]$, their intersection is non empty, suppose that $c\in[a]\cap[b]$. Since $c\in[a]$, we have that $a\sim c$. Simillarly since $c\in[b]$, we have that $c\sim b$. Thus by the transivity of the equivalence statement we would have that,$a\sim c\text{ and }c\sim b\implies a\sim b$. Hence showing that $[a]=[b]$. Therefore we have that all equivalence classes are disjoint from each other.$\square$

Thus we define the quotient set

**Definition 2.15:** Given a set $A$ with an equivalence relation $\sim$, the quotient set $A/\sim=\left\{ [a]\vert a\in A\right\} $ is the set of all equivalence classes formed by this equivalence relation.

Hence we have defined the quotient set $A/\sim$. Along with this we define the surjective projection map $\pi_{\sim}:A\twoheadrightarrow A/\sim$, defined as



$$
\forall a\in A:\pi_{\sim}(a)=[a]
$$



i.e. the projection map sends the object to its equivalence class in the quotient set. Hence given an equivalence relation, we have constructed a quotient set with an accompanying projection function.

**Theorem 2.16:** For a quoteint set $A/\sim$, the accompanying $\pi_{\sim}$ is surjective

**Proof:** clearly for any $[a]\in A/\sim$, we have that $a\in[a]$, therefore $\pi_{\sim}(a)=[a]$. Hence showing for any $[a]\in A/\sim,\exists a\in A:\pi_{\sim}(a)=[a]$.$\square$

This leads to an interesting meta discussion about quotenting and equivalence classes which we discuss now.

### Representations, Well-Definitness and Meta Discussion

Before moving foreward, I would like the reader to get comfortable with the idea of representatives of equivalence classes and well definitness when we are talking about equivalence classes. The problem with equivalence classes is that, as we show in their definition, that they are subsets of a larger set which we define using an equivalence relation. Now ideally since they are sets, I would like to denote them using a “capital” letter, sadly there can be so many equivalence classes that after a finite number of them, I would be left defeated in attempt of choosing a new symbol for every distinct equivalnce class. Moreover, assigining an arbitary symbol say $\Delta$ to an equivalence class, tells me nothing about the elements inside the equivalence class, which would end up make the act of talking about any equivalence class really hard. One might expect the conversation to go as:

- **Undergraduate_A:** Okay consider $\Delta$
- **Undergraduate_B:** What is $\Delta$ again?
- **Undergraduate_A:** It is an equivalence class
- **Undergraduate_B:** Which equivalence class ? you already defined fifty of them
- **Undergraduate_A:**<sighs> for the hundreth time,$\Delta$ is the equivalence class that contains $a$
- **Undergraduate_B:** Sure
- **Undergraduate_A:** Okay consider $\Delta$

<some time passes>

- **Undergraduate_B:** What is $\Delta$ again?

To prevent this infinite regress into madness, a clever representation is to choose an element $a$ inside the equivalence class and denote it as $[a]$. By just looking at the notation, we know we are talking about the equivalence class of $a$. We end up calling $a$ a representative of the equivalence class. Yet why must $a$ be the representative ? There is no special reason for $b$ to not be a representative.$a$ is only a representative because I choose it to be and we as mathemathicians stringly dislike arbitrary choices. Thus this raises the question of well definiteness or if a function is well defined. When we define a function $f$ on an equivalence class, what is intended is that the function inputs the whole equivalence class and maps it to just one element in the image i.e. every element inside the equivalence class is mapped to the same element in the image. Hence we would ideally like the function $f$ to not depend on the representation we choose or to work correctly even if we change the representation. If such is the case, then we say that the function $f$ is well defined.

Hence while working with equivalnce classes, the reader must understand the following:

- 1) The actual object (the equivalence class) that we are dealing with is just a set without a name or anything. It is supposed to have the same image as the image you get when you think of any arbitrary set $A$,
- 2) Depicting that equivalence class as $[a]$ for some $a$ inside the equivalence class is just a clever notation to talk about that equivalence class, there is usually nothing special about $a$ except for the fact we choose it as a representative,
- 3) Whenever working with functions on equivalence classes, we should either try to not use the representation (which happens rarely) or argue about that the function is well defined

### Universal property of Quotients in SETS

Now we set the universal properties of quotients in sets and prove it.

We say that a function $f:A\to B$ respects the equivalnce relation $\sim$, if $\forall a_{1},a_{2}\in A$



$$
a_{1}\sim a_{2}\implies f(a_1)=f(a_{2})
$$



Thus the universal property of quotients in SETS is

**Theorem 2.17:** In the category SETS, given an equivalence relation $\sim$ on a set $A$, there exists an set $A/\sim$ with the projection function $\pi_{\sim}$, such that if a function $f:A\to B$ respects $\sim$, then there exists a unique set function $\bar{f}:A/\sim\to B$ such that $f=\bar{f}\circ\pi_{\sim}$.

This same theorem can be stated by saying that the following diagram commutes

![Commutative diagram 1](/The_Algebraic_Picture_assets/diagram_1.svg)

**Proof:** We have already shown the construction of $A/\sim$, the definition of $\pi_{\sim}$ and teh surjectivity of $\pi_{\sim}$. Now we show the later proposition that if a function $f:A\to B$ respects $\sim$, then there exists a unique set function $\bar{f}:A/\sim\to B$ such that $f=\bar{f}\circ\pi_{\sim}$. Hence suppose that $f:A\to B$ respects $\sim$.

Hence we define $\bar{f}:A/\sim\to B$ as $\forall[a]\in A/\sim$



$$
\bar{f}([a]):=f(a)
$$



We argue that $\bar{f}$ is well defined. Consider the same equivalnce class with different respresentative $[a]=[b]$, then we have that $\bar{f}([a]):=f(a)$ and $\bar{f}([b]):=f(b)$, but since $[a]=[b]$, we have taht $a\sim b$ and since $f$ respects $\sim$, we have that $f(a)=f(b)$, therefore $\bar{f}([a])=\bar{f}([b])$. Thus the function is well defined. Trivially $f=\bar{f}\circ\pi_{\sim}$ holds. Clearly we have that $f(a)=\bar{f}([a])=\bar{f}\circ\pi_{\sim}(a)$.

Now we argue that $\bar{f}$ is unique. Hence suppose $g:A/\sim\to B$ is such taht $f=g\circ\pi_{\sim}$, then we have that $\forall[a]\in A/\sim$, that



$$
\bar{f}([a])=f(a)=g\circ\pi_{\sim}(a)=g([a])
$$



Thus showing taht $\bar{f}=g$. Hence proving the theorm,$\square$

This was the universal property of quotients in SETS. We wil encounter this same construction in further algebraic objects/categories again and again. There we will not construct the whole operation from the ground up, we would primarily be asking what extra conditions do we need for this structure to exist in those categories and then we will see if this structure actually exists there or no. This is am extremely important structure, hence the reader is advised not to move further until complete understanding.

### Consequence of the Universal property

The universal property of quotients implies some fairly important consequences which are widely known as the “Isomorphism theorems”. Here we prove them in the context of SETS.

Given the set morphism $f:A\to B$, we define the equivalence relation $\sim_{f}$ as $\forall a,b\in A$



$$
a\sim_{f}b\iff f(a)=f(b)
$$



then the first isomorphism theorem is

**Theorem 2.18: (The first isomorphism theorem)** if teh function $f$ is surjective, then $\bar{f}$ is a bijective function i..e $A/\sim_{f}\cong B$

**Proof:** We first show that $\bar{f}$ is injective. Suppose for some $[a],[b]\in A/\sim_{f}$, we have that $\bar{f}([a])=\bar{f}([b])$, Thus we have that $f(a)=f(b)$, which implies $a\sim_{f}b$, thus we have that $[a]=[b]$. Showing $\bar{f}$ is injective.

Now we show that $\bar{f}$ is surjective. consider for any $b\in B$, since $f$ is surjective, we have there exists $a\in A$ such that $f(a)=b$, then by definition we have that $\bar{f}([a])=b$, hence showing taht $\bar{f}$is surjective, therefore $\bar{f}$ is bijective.

In total, it is accepted that there are three isomorphism theorems. The set theoretic versions of the second and third isomorphism theorem are not as easily stated as above. Therefore we currently skip them. We will later look at their group-theoretic versions.

## The Product Structure

### Construction

The product construction is easier and simpler than the quotient construction. Though we assume the reader to be famillar with the cartesioan product of sets, we reintroduce it here again

**Definition 2.19:** Given sets $A,B$, we define a new set $A\times B$ defined as $\left\{ (a,b)\vert a\in A,b\in B\right\} $.

Along with this we also construct the cannocial projection maps that comes from defining the cartesioan product.

**Definition 2.20:** Given the product $A\times B$, we define two cannonical projection maps $\pi_{A}:A\times B\to A$ and $\pi_{B}:A\times B\to B$, defined as follows



$$
\pi_{A}(a,b)=a
$$





$$
\pi_{B}(a,b)=b
$$



### Universal property of Product in SETS

Now we show the universal property of products.

**Theorem 2.21:** In SETS, given a set $Z$ with maps $\sigma_{A}:Z\to A$ and $\sigma_{B}:Z\to B$, there exists a unique set morphism $\sigma:Z\to A\times B$ such that $\pi_{A}\circ\sigma=\sigma_{A}$ and $\pi_{B}\circ\sigma=\sigma_{B}$ i.e. the following commutative map commutes

![Commutative diagram 2](/The_Algebraic_Picture_assets/diagram_2.svg)

**Proof:** Indeed, We define $\sigma$ as follows



$$
\sigma(z)=(\sigma_{A}(z),\sigma_{B}(z))
$$



We show that that the diagram commutes with such a sigma, We have that $\forall z\in Z$



$$
\pi_{A}\circ\sigma(z)=\pi_{A}(\sigma_{A}(z),\sigma_{B}(z))=\sigma_{A}(z)
$$



Simillarly



$$
\pi_{B}\circ\sigma(z)=\pi_{B}(\sigma_{A}(z),\sigma_{B}(z))=\sigma_{B}(z)
$$



Now we show that the function is unique, suppose there is some other function $g:Z\to A\times B$, such that $\pi_{A}\circ g=\sigma_{A}$ and $\pi_{B}\circ g=\sigma_{B}$, then we immediately have that $\forall z\in Z$, in the first coordinate $g(z)$ has $\sigma_{A}(z)$ and in teh second coordinate has $\sigma_{B}(z)$, thus we have that $g(z)=(\sigma_{A}(z),\sigma_{B}(z))=\sigma(z)$. Hence showing $\sigma$ is unique.

With this, we complete looking at the category SETS, and now turn to learn more algebraic objects and structures.

## Refrences

[Alu09]  P. Aluffi, Algebra: Chapter 0, Graduate Studiesg in Mathematics, vol. 104, American Mathematical Society, Providence, RI, 2009.

[^1]: for a refresher, one might look at the first two sections of Aluffi: Algebra chapter 0[Alu09]
