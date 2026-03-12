SELECT 
    o.order_id,
    p.name,
    oi.quantity,
    oi.price
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN orders o ON oi.order_id = o.order_id;