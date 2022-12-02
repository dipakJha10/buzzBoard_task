Title:BuzzBoard ecom task

Description: The task is about the crud operation for the orders.

Steps and scenarios:

1. creating orders: the orders can be created by sending the payload in json format in the request body. And for the order_id , it should always need to be unique, other wise it will not save the data in the db. 
endPoint: /api/orders/create

2. update orders: the delivery date can be modified by sending the payload data into the body on the bases of order_id and new delivery date
endPoint: /api/orders/update

3. List all orders: list of orders in a specific date: the orders can be viewed by sending date into the payload. In postman the payload is need to be send in params section. if we not send any parameters into the payload and then try to hit the api or endpoint it will show all the orders that is saved into the db. I have set the offset limit to 0,2 . So that it will show the two orders and for the getting the next orders we need to pass query in the api.
endPoint: /api/orders/list

4. Query for a specific order: for searching orders in the db, we need to pass the order_id of particular product. And we will get the result for that order_id. Again we can see the orders by sending nothing as params.
endPoint: /api/orders/search


5. delete orders: for deleting the orders. We just need to pass order_id , into the body and we will get the result as product has been deleted.

endPoint: /api/orders/delete


for testing the api i am sharing the task postman collection in email. 