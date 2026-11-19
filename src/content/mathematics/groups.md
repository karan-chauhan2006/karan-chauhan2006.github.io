---
title: "Groups I: Constructing GRP"
chapter: 3
section: "Groups I"
description: "Homomorphisms, normal subgroups, and quotients."
draft: false
---

## Groups I: A structural introduction

Having looked at familliar sets and their category SETS, now we turn our eyes away from them. I would like the reader to consider their favourite set and the rational numbers $\mathbb{Q}$. I would like the reader to compare them and determine their differences. What I would like the reader to notice is that, in $\mathbb{Q}$, the reader would know a way to "add" and "multiply" numbers whereas in the set we don't immediately know what "adding" or "multiplying" an element would mean. If the set you are considering is something like the set of all cats in the world, we don't immediately know what a cat "steve" + a cat "orange cat" would mean. Hence in our journey of going from just a set to something nice like $\mathbb{Q}$ is to start defining those operations.

I once read a joke online on dad math. I attach it here

<img
  src="/The_Algebraic_Picture_assets/vector_space_dad_joke.jpeg"
  alt="You can make a vector space with cows as long as you define what a negative cow is"
/>

We follow a simillar direction. We aim to define "multiplication" and "inverses" over a set.

The campaign through group theory would be organised into three distinct parts. This chapter would introduce groups and recontextualise already familliar structures fom SETS into the category **Grp**. The second part would be concerned with defining new structures which can then be studied. The third part would look into classical group theory and the combinatorial aspects of it.

## The Object: Group

We aim to construct a new cateory which we'll denote as **Grp**. This new category would have objects called "groups", which we'll define in a moment, and morphisms called "group homomorphism" or plainly "homomorphism" since the context is clearly within groups. We set out to defining the objects.

As discussed in the introduction, we want to define an opertaion on a set. We do that using a binary opertaion. 

**Definition 3.1:** A binary opertaion on a set $S$ is a function $\cdot:S\times S\to S$

Hence we use this to define a group

**Definition 3.2:** A group $(G,\cdot)$ is a set $G$ endowened with a binary operation $\cdot : G\times G \to G$ such that it follows the following properties:

1) **Associativity:** $\forall a,b,c\in G: a\cdot (b\cdot c)= (a\cdot b)\cdot c$

2) **existence of an identity:** $\exists e\in G: \forall g\in G, e\cdot g = g\cdot e = g$

3) **existence of inverse:** $\forall g \in G, \exists g^{-1}\in G: g\cdot g^{-1}= g^{-1}\cdot g = e$

When the context is clear enough, we'll drop the specific symbol for the binary operation and would just end up writting elements in concatination. Hence, in clear enough context, we have that $gh$ is the same as $g\cdot h$

It is to be noted that we haven't demanded commutativity of elements in our definition i.e. we haven't demanded that $\forall g,h\in G, g\cdot h = h\cdot g$. Commutativity is infact a desirable property and is also possessed by our current idol $\mathbb{Q}$, yet we build this category without demanding commutativity. The groups which do possess commutativity as specially called "Abelian groups". We'll specifically look at them at the end of our exposition into group theory. In general, we do not assume anything about commutativity.

Hence we have constructed an identity in our set and also inverse for each element in our set. We show that inverses and identity are unique.

**Theorem 3.3:** The idenity $e$ in a group $G$ is unique. 

**Proof:** Let $e,h$ be idenities in the group $G$. Then using the identity property of $e$, we have that $eh=h$, and using the identity property of $h$, we have that $eh=e$, hence we have that $e=eh=eh=h$, hence shoing that the identity is unique. $\square$

Before, showing that inverses are unique, we prove cancellation laws 

**Theorem 3.4:** $\forall a,b,c \in G: ab=ac \implies b=c$

**Proof:** Hence consider $\forall a,b,c\in G$ that $ab=ac$, then since $G$ is a group, we have that there exists $a^{-1}\in G:  a\cdot a^{-1}= a^{-1}\cdot a = e$, hence  we multiply the equation by $a^{-1}$ on the left, to get $a^{-1}ab=a^{-1}ac$, simplifying we get that $b=c$. $\square$

Simillary we can also show that 

**Theorem 3.5:** $\forall a,b,c \in G: ba=ca \implies b=c$

Now we show that inverses are unique 

**Theorem 3.6** $\forall g\in G$, the given $g^{-1}$ is unique

**Proof:** suppose both $g^{-1}$ and $h$ are inverses to $g$. Then we have that $gg^{-1}=e=gh \implies gg^{-1}=gh$. Using Theorem 3.4, we have that $gg^{-1}=gh \implies g^{-1}=h$. Hence showing that inverses are unique.$\square$

Before moving forward into morphisms for the category, I introduce a notation that we'll be frequently using and diverge a little into constructing set functions using the given binary operation and showing an interesting result.

Throughout the text,in the context of general groups i.e. not specifically abelian groups, given a nonzero natural number $n$, we'll use the notation $g^{n}$ to denote mrepreated multiplication of the element $g\in G$ with itself. When talking about abelian groups and rings, the group multiplication is usally treated as addition (because of it's close relation to rings), in that context we'll use the notation $ng$ to denote the same idea as $g^{n}$.

Now we turn to the digression into group elements as set functions. 

### Group: Set of Automorphisms

Consider a group $G$ with the binary operation $\cdot$. Thus given any element $g\in G$, we define the set function $\rho_{g}: G\to G$ defined as: $\forall h\in G$

$$
\rho_{g}(h):= gh
$$

This function, corresponds to left multiplication by $g$ to any element in the group. We first note that this function is a bijection of SETS

**Theorem 3.7:** $\forall g\in G:\rho_{g}$ is a bijection of SETS.

**Proof:** We propose a candidate for the inverse of the function. Then show that the candidate is in fact both the left and right handed inverse of the given function. Thus showing that the function is an isomorphism in SETS, then using theorem 2.10, 2.7 and 2.8 we would have that the function is a bjection. 

The candidate we propose is as follows: Since $G$ is a group, we have that there is a unique inverse to $g$ i.e. the element $g^{-1}$. Hence using the same construction as above, we define the function $\rho_{g^{-1}}$. We claim that this is an inverse to the given function. 

Hence $\forall h \in G$, consider $\rho_{g^{-1}}\circ\rho_{g}(h)$. Hence we have that 
$$
\rho_{g^{-1}}\circ\rho_{g}(h) = \rho_{g^{-1}}(gh)=g^{-1}(gh)
$$

Using associativity we have that 

$$
g^{-1}(gh) = (g^{-1}g)h=eh=h=\text{Id}(h)
$$

where $\text{Id}:G\to G$ is the identity function. Simillarly we have that $\forall h \in G$, consider $\rho_{g}\circ\rho_{g^{-1}}(h)$. Hence we have that 
$$
\rho_{g}\circ\rho_{g^{-1}}(h) = \rho_{g}(g^{-1}h)=g(g^{-1}h)
$$

Using associativity we have that 

$$
g(g^{-1}h) = (gg^{-1})h=eh=h=\text{Id}(h)
$$

Thus showing that both the function are inverses to each other. Hence showing that the given function is a bijection of SETS.$\square$

Thus consider just the set $G$ with it's elements. Consider the set of all functions on $G$ i.e. functions of the form $f: G\to G$. We call this set the endomorphism of $G$ in the category SETS. Further inside the endomorphisms of G, consider the subset all the invertible functions in the endomorphisms of $G$. We aim to define the mapping $\rho$ from $G$ to the SET automorphism of $G$. This mapping would be an interesting object in the third part of the group exposition. First we define the concepts rigourously. 

**Definition 3.8:** Given a category $\mathcal{C}$, and an object $A\in\text{Obj}(\mathcal{C})$, we define the endomorphism of $A$ in $\mathcal{C}$ as $\text{End}_{\mathcal{C}}(A):=\text{Hom}_{\mathcal{C}}(A,A)$

**Definition 3.9:** Given a category $\mathcal{C}$, and an object $A\in\text{Obj}(\mathcal{C})$, we define the automorphism of $A$ in $\mathcal{C}$ as $\text{Aut}_{\mathcal{C}}(A):=\left\{f\in\text{End}_{\mathcal{C}}(A): f \text{ is an isomorphism}\right\}$

**Theorem 3.10** Given a group $G$, $\text{Aut}_{\text{SET}}(G)$ is a group with the operation of composition.

**Proof:** We already have that function composition is associative from the definition of the category. The existence of an inverse is given to us by the definition of $\text{Aut}_{\text{SET}}(G)$, and we have that the identity function $\text{Id}:G\to G$ acts like an idenity and is an automorphism of $G$ in SETS. Thus showing that $\text{Aut}_{\text{SET}}(G)$ is a group with the operation of composition. $\square$

Hence we construct the mapping promised. The mapping is precisely what we started with. We define $\rho:G\to\text{Aut}_{\text{SET}}(G)$ as $\forall g \in G$

$$
\rho(g):=\rho_g
$$

Where $\rho_g$ is the function we defined at the strating of the section. We now show taht the defined $\rho$ is injecive

**Theorem 3.11:** The function $\rho: G \to \text{Aut}_{\text{SET}}(G)$ as defined above is injective

**Poof:** Clearly, Suppose for any $g,h\in G, \rho(g)=\rho(h)$ i.e. we have that the functions $\rho_{g}$ and $\rho_{h}$, hence $\forall a\in G$ we have that $\rho_g(a)=\rho_h(a)$. Thus consider for $a=e$, we have that $\rho_g(e)=\rho_h(e)$, but from the definition of teh functions we have that $\rho_g(e)=ge=g$ and simillaryly $\rho_h(e) = he= h$, thus showing that $g=\rho_g(e)=\rho_h(e)=h$, thus showing that $\rho$ is injective. $\square$

Hence to summarise the digression, we sumamrise what we have shown. 

1) we showed that any element $g$ in the group $G$ corresponds to an automorphism on $G$ as a set. Recall that every automorphism on a finite set $S$ of say $n$ elements is a permutation of $n$ things. Thus we have shown that when we left multiply $g$ to elements of teh finite group $G$ we get a permutation of the elements of $G$ i.e. left multiplication by $g$ is both one-to-one and onto. 

2) no two distinct elements inside the group will give the same permutation on the elements of the group.

Later on, after building a little bit more vocabulary, we will be looking at "Cayley's theorem" which basically says that every finite group is basically some "subgroup" inside the permutation groups. We have here basically built the idea behind it. We need to build more language and structure to actually formalise the theorem.

Before moving on, I suggest that the reader goes and look at examples of well known groups. The reading that I reccomend are sections 1.1 to 1.6 in Dummit and Foote [DF04], and Section 2.2 in Aluffi [Alu09]. Currently I would ask the reader to just focus on the structure we talked about i.e. satisfying the group axioms, finding inverses and identiies, trying to represent group elements as permutations. I would also recoomend reading on group tables in the expectation that they'll bring home the idea of group elements as permutation on the group as a set i.e. the first point in teh summary. In the group table, particullarly notice that each element only appear once in it's particular row and column and also notice that all rows are distinct from each other i.e. refering to the second point in the summary. Currently I would recommend not worrying about the size of groups i.e. their orders.

Now we return back to constructing teh category.

## The morphism: Group homomorphisms

Now we look at "functions" of groups or morphisms in the category **Grp**. As a personal convention, I would avoid calling them functions, primarily because I want to restrict the use of the term to refer to only morphisms in the catgeory of SETS. I will usually refer to these functions as Group homomorphisms, Group morphsims or when the context if absolutely clear, just morphisms. 

Till now we have equipped sets with a binary opertaion. It is only intuitive that we maintain this operation under our mappings i.e. The mappings should behave in such a way that multiplying before the mapping and after the mapping should give us the same result. We would call this "respecting the multiplication structure". Now we formalise this idea using mathemathics.

Consider two groups $(G,\cdot_G)$ and $(H,\cdot_H)$. let $\varphi:G\to H$ be a function between the two groups. Now as per our discussion, we want this function to respect the group operation. Therefore we would need that the following diagram commutes 

![Group homomorphism diagram](/The_Algebraic_Picture_assets/group_hom_1.svg)

where $\varphi \times \varphi: G\times G \to H\times H$ is a function defined as $\forall (a,b)\in G\times G, \varphi\times\varphi (a,b):= \left( \varphi(a),\varphi(b) \right)$. Thus needing the diagram to commute, we would have that the function $\varphi$ must have teh property: $\forall a,b\in G$

$$
\varphi(a\cdot_{G}b) = \varphi(a)\cdot_{H}\varphi(b)
$$

This is what we define as a group homomorphism

**Definition 3.12:** Given groups $(G,\cdot_G)$ and $(H,\cdot_H)$, we saya function $\varphi:G\to H$ is a group homomorphism if $\forall a,b\in G, \varphi(a\cdot_{G}b) = \varphi(a)\cdot_{H}\varphi(b)$

Thus we define our category **Grp**

**Theorem 3.13:** With the groups as objects and the group homomorphism as morphisms, **Grp** is a catgory.

**Proof:** We first show that the identity function is a group morphism. for any group $G$, consider $\text{Id}:G\to G$, thus $\forall a,b \in G$, we have that 

$$
\text{Id}(ab)=ab=\text{Id}(a)\text{Id}(b)
$$

hence identity is a group homomorphism. From SETS, we already have that it acts both like a right hand side identity and a left hand side identity under composition of functions. We show that the composition of two group homomorphisms is also a gorup homomorphisms, hence consider groups $F,G,H$ along with morphisms $\varphi:F\to G, \sigma:G\to H$, thus consider the function $\sigma\circ\varphi: F \to H$, hence $\forall a,b\in F$, we have 

$$
\sigma\circ\varphi(ab)=\sigma\left(\varphi(a)\varphi(b)\right) = \sigma(\varphi(a))\sigma(\varphi(b))=\sigma\circ\varphi(a)\sigma\circ\varphi(b)
$$

Hence showing that composition of two group homomorphisms is again a group homomoprhism.

The associativity of group homomorphisms comes from teh associativity of functions. Thus showing thet **Grp** is a catgeory. $\square$

Thus in this way we have constructed the category **Grp**. In the next section, we'll discuss what familliar structures that we have seen in SETS would look like in this category, this would lead to discussing properties of group morphisms which are missing from this section.

## Refrences

[DF04] Dummit, David S., and Richard M. Foote. Abstract Algebra. 3rd ed. Hoboken, NJ: John Wiley & Sons, 2004.

[Alu09]  P. Aluffi, Algebra: Chapter 0, Graduate Studiesg in Mathematics, vol. 104, American Mathematical Society, Providence, RI, 2009.

