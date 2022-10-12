* challenges
---------------------------------------------------------------------------
1- what now ?
 
- understand the problem

* what is the problem ? 
well i've onley build the home page and i don't know what to do from here?

* what are the unkowns ? 
how every thing will connect to each other? 
how the system will work? 
where should i save my products data?
how should I make call from data base? 
how the data base dat should be?
how can I make the layout dynamic where the admin can has a lot of freedom?

* what is our data ?
we have products which are being saved somewhere in a productlist and once the use click one we should make an api request to that productlist and get that specefic product and display it in its own product page?

before that i need to categorize every thing so I can get the item base on the category
for instance let's say the use click the makbook m1 product we need to go to this route
or click the samsung s22 from top rated products

home > laptop > mackbok
home > mobile > samsung ultra s22

the question here is that should I have different category for propular products, top rated, hot sails etc.. ?
propbelbly yes => however I need to have a property which redirect me to their original category for instance if the user clicked the item(mobile) from hot sails category I need to know what is the original category of the item 
 
onother question is that should we manually selecet which products are popular or top rated ?
I dont think so, I believe that we have to write some kind of algorithem that detect the most viewd on the top rated and the rest of the categories dynamically by evaluating the use interaction with them


* what is the condition ?
---------------------------------------------------------------------------
- maek a plan
I think it would be great to first build the constant categoris and work on their logic and then try to write some logic for the hot sails, top rated etc

build a productList page
 
build a productDetails page

build a cart page

build an acount page

---------------------------------------------------------------------------
- implement the plan

---------------------------------------------------------------------------
- revise the solution

---------------------------------------------------------------------------

solving one pece of the puzzle at the time

productCategory layout :

header(same) - sidebar will has its own data & a plus section for price filter - page route the same with a plus filter button at the top - footer(same) - main(different)

header -> done
footer -> done

sidebar ->
* chanlleng conditionally render the check box in the product list page 
process:
1- creating a category item that has a label and a costum checkbox
2- when we are at productCategory page we need to use that item and when we are at other paegs we need to use the current item which has icon and text

question: should I build two seperate items || make the current item responssive


