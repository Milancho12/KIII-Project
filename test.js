const { db } = require('./database');

async function test() {
  const data = await db.allAsync(`
    SELECT d.id as delivery_id, m.name as market_name, a.code, di.delivered_qty, di.returned_qty, d.date 
    FROM delivery_items di 
    JOIN deliveries d ON d.id = di.delivery_id 
    JOIN markets m ON m.id = d.market_id 
    JOIN articles a ON a.id = di.article_id 
    WHERE a.code IN ('814', '94') AND di.returned_qty > 0
  `);
  console.log(data);
}

test().catch(console.error);
