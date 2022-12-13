------------------------------------------
- understand the problem
- maek a plan
- implement the plan
- revise the solution
------------------------------------------

* challenges


* problem ? 
well i've onley build the home page and i don't know what to do from here?

* unkowns ? 
how every thing will connect to each other? 
how the system will work? 
where should i save my products data?
how should I make call from data base? 
how the data base dat should be?
how can I make the layout dynamic where the admin can has a lot of freedom?

* data ?
we have products which are being saved somewhere in a productlist and once the use click one we should make an api request to that productlist and get that specefic product and display it in its own product page?

before that i need to categorize every thing so I can get the item base on the category
for instance let's say the use click the makbook m1 product we need to go to this route
or click the samsung s22 from top rated products

home > laptop > mackbok
home > mobile > samsung ultra s22

* questions ?
the question here is that should I have different category for poopular products, top rated, hot sails etc.. ?
propbelbly yes => however I need to have a property which redirect me to their original category for instance if the user clicked the item(mobile) from hot sails category I need to know what is the original category of the item 
 
onother question is that should we manually selecet which products are popular or top rated ?
I dont think so, I believe that we have to write some kind of algorithem that detect the most viewd on the top rated and the rest of the categories dynamically by evaluating the use interaction with them


I think it would be great to first build the constant categoris and work on their logic and then try to write some logic for the hot sails, top rated etc

* plan

build a productCategory page
 
build a productDetails page

build a cart page

build an acount page


productCategory layout :

header(same) - footer(same) - sidebar will has its own data & a plus section for price filter - page route the same with a plus filter button at the top - main(different)

(header) -> ✔
(footer) -> ✔
(sidebar)-> ✔
(main)   -> ✔
---------------------------------------------
(sidebar) ->
* chanlleng conditionally render the check box in the product list page 
process:
1- creating a category item that has a label and a costum checkbox
2- when we are at productCategory page we need to use that item and when we are at other paegs we need to use the current item which has icon and text
---------------------------------------------
(main) ->
* question?
should I build two seperate items || make the current item responssive?
* data
each card has many different styles
* solution 
build seperate product component one for home page and one for productCategory page -> ✔

* problem? (level 2)
-how to display each category items when they are called?
* answer:
1. pass props to products component props(category, selectedPage, fillters,...)

2. products makes a call to the data base with these info
selectedPage ✔
category ✔

3. display them in the main layout as a productCategory ✔
---------------------------------------------------

* challenge

* question?
how to shift the products right and left on clicking the right and left btns at home page?

* condition? 
when there is no more products left in one side make the btn on that side disappear. and smooth animation.

* data:
we have certain number of that in our array for each category slider.
Ex: Hot Sails -> gets data from ProductsData -> [item1, item2, item3, ...]
each product card has a certain width

* question? 
how to only shift the products in the screen area

* data:
the screen screen size changes from divice to divice, therefore we need write an algorithm that respons to each screen 

* requirement:
1. calculating the width of the wrapper base on screen size
2. getting the array length to hide the control btns

* challeng
how to check scrollPosition befre clicking the btn

slider sliding -> ✔
---------------------------------------------------
* challenge
how set the routing structure

* condition
1. on clicking each link we need to direct the user to that specefic page
2. by writing the path in the browser search bar we should be able to browse to that page

* data
- we have the links in the sidebar
- first we load the home page "/" then by clicking any category link we go to "/category" in the category we need to recive the clicked link data and create path with it:
EX: "/category/mobile/apple

* challenge
how to open the link route

* condition 
user click the link and now we have this in our browser search bar -> /category/mobile/apple
how to open this specefic page

* data
I have product category which renders products base on the passed category name

* problem
how to pass the link root to product category
------------------------------------------------------
* changes
1. sidebar icons color and cheapest most expensive icon ✔
2. take the sorting method and bring them in the fast links and delete them from the side bar in product category ✔
3. add other filltering method to the sidebar ✔
4. show number of products top right ✔
5. delete all fillters from the side bar in the home page ✔

-----------------------------------------------------
* features to add
1. add take a look at categories pages ✔
2. link side bar btns ✔
3. make page route dynamic ✔
4. add sorted by before sorting in product category pages ✔
5. create page for brands -> (vitrien - mobile - laptop - headset - ...) ✔
6. create page for card
7. create page for product
8. create login page
9. create admin dashboard page
10. close the side bar in the small screen when you navigate to a certain page ✔
11. send different data for each page (sidebar, products, category, ...)

--------------------------------------------
* challenge
how to go the clicked link route in the page route

* data
we have the final page location EX: /mobile , /mobile/apple, /mobile/apple/14pro

we want to redirect to the specefic page on clicking

* solution
we need to give each route element a url specefic to it
not the last url

--------------------------------------------
* challenge
1. design the brand main content switching
2. how to switch the brand categories -> showcase/ mobile/ tablet/ monitor 
3. what is the best way to load and reuse the code
4. what about filtering -> it's more professional to be there

* condiitons 
1. best option is to reuse the code and try to load an existing data without creating new data
2. we need new sidebar with less filter option like digikala

* solution
1. use custom hooks to reuse the similar functionality
2. reuse the existing components
3. create unexisted necessary components

* steps
1. draw the page layout
2. define existed & unexisted components
3. import existed
4. create unexisted
5. create new custom hook and used it here
6. create new required data for the page
-------------------------------------------
* challenge
how to create the BrandCategory layout?

*solution
1. I want the whole page to be products in the mobile screen with sidebar activator btn in the top
2. I want to display the sidebar in the larger screen (900 and more)

-------------------------------------------
* challenge
how and what to fetch from the api 

* condiiton 

------navigation from home sidebar----------
1. we can navigate to mobile > all
2. we can navigate to laptop > all
3. we can navigate to mouse > all

4. we can navigate to mobile > apple
5. we can navigate to mobile> samsung
6. and many more similar

------navigation from brand sidebar----------
1. we can navigate to brands > samsung > mobile/ laptop/ headset/ watch / all/ ..
2. we can navigate to brands > apple > mobile/ laptop/ headset/ watch / all/ ..
3. and many more

--------------------------------------
* common paths

1. brands > samsung > laptop
2. laptop > samsung

both of them will recieve the same product

* condition
1. I have two different sidebar layout
2. I have two similar data in each sidebar
3. I have tow different products layout
4. I have the same products for both layout

*solution 
1. create two different layout with the least use of different components
2. fetch data from the same source for both places
3. have the same functionality for both -> using custom hooks will be good idea
4. we will fetch data in their own rout -> home > mobile > samsung | brands > samsung > mobile but the data will be fetched from the same place

* break down the plan

1. all section of home sidebar categories -> mobile > all | laptop > all, ... will have their unique data(sidebar and products)
2. mobile > samsung | brands > samsung > mobile will have the same data(sidebar and products)
-----------------------------------------------------

* challenge
1. adding close btn to close the side bar in the small screen ✔
2. creating the brand page sidebar ✔
3. fetching data for other brand category -> tablet / laptop/ ...
4. fixing the price position in the other category ✔
5. fixing brand showcase slider data fetching and link redirecting ✔
--------------------------------------------------------
* challenge
1. hosting website data online

* condiiton
1. in the App components we will pass a url to (ProductsCategory & BrandCategory) which they will fetch that url and display
it on the screen
2. 





* challenge

1. linking brand categoris to different sidbar and products data
2. hosting data online
3. linking the data images to online hosted image links


