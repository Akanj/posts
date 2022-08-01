## Objectifs
L’intégralité du test se base sur l’API définie et documentée ici :
https://jsonplaceholder.typicode.com/
L’objectif est de développer 2 pages avec navigation entre elles.
La première page est un listing de posts, sous forme de listing avec 1
pagination simple (« Suivant » & « Précédent ») tous les 30 éléments.
Chaque élément doit présenter :
- titre du post
- contenu du post
- 1 bouton « Voir » qui conduit vers la 2e
page

La deuxième page est une page présentant le post en-lui même. Elle présente :
- titre du post
- contenu du post
- les détails de l’utilisateur qui a écrit le post
- la liste des commentaires rattachés au post avec une barre de recherche pour
effectuer une recherche sur le contenu du post et n’afficher que les résultats
trouvés


## Règles
L’utilisateur ne peut visualiser que 3 posts maximum, s’il a dépassé son quota,
il doit lui être signalé un message d’erreur « Vous avez atteint votre quota pour
la journée ».
Il ne doit plus pouvoir visualiser de nouveaux posts, mais il peut toujours voir
des posts qu’il a déjà visité.


## Contraintes techniques
Vous devez utiliser un framework JS moderne (VueJS, React, Svelte, Angular).
Pour la partie style, vous devez aussi vous appuyer sur un framework CSS
(Bootstrap, Tailwind...).
Vous devez pousser votre code sur un répertoire Github public.


## Les plus
Sans rentrer dans une intégration poussée, il est attendu une certaine
cohérence de style (couleur des boutons, organisation des pages...).
Idéalement proposer une persistance des données même si on quitte la page
(cookies, localStorage).
La pagination peut présenter le nombre de résultats total, et permettre de
naviguer en choisissant la page.
La recherche sur les commentaires peut être améliorée pour faciliter
l’expérience utilisateur (casse, highlight du mot dans le résultat...).
