const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client =  new MongoClient(uri);

async function run() {

    await client.connect();
    const database = client.db("firstDB");
    const items = database.collection("inventory");

    // 문제 1
    // const itemdata = await items.insertOne(
    //     { item: 'canvas', qty: 100, tags: ['cotton'], size: { h: 28, w: 35.5, uom: 'com'} }
    // );
    // console.log("itemdata", itemdata);

    // 문제 2
    // const itemList = [
    //     { item: 'journal', qty: 25, tags: ['blank', 'red'], size: {h: 14, w: 24, uom: 'cm'} },
    //     { item: 'mat', qty: 85, tags: ['gray'], size: {h: 27.9, w: 35.5, uom: 'cm'} },
    //     { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: {h: 19, w: 22.85, uom: 'cm'} }
    // ];
    // const itemListResult= await items.insertMany(itemList);
    // console.log("itemListResult", itemListResult);


    // 문제 3
    // const findItem = await items.find({}).toArray();
    // console.log("findItem", findItem);

    //문제 4
    // const itemList1 = [
    //       {    item: 'journal',    qty: 25,    size: { h: 14, w: 21, uom: 'cm' },    status: 'A'  },
    //       {    item: 'notebook',    qty: 50,    size: { h: 8.5, w: 11, uom: 'in' },    status: 'A'  },  
    //       {    item: 'paper',    qty: 100,    size: { h: 8.5, w: 11, uom: 'in' },    status: 'D'  },  
    //       {    item: 'planner',    qty: 75,    size: { h: 22.85, w: 30, uom: 'cm' },    status: 'D'  },  
    //       {    item: 'postcard',    qty: 45,    size: { h: 10, w: 15.25, uom: 'cm' },    status: 'A'  } 
    //     ];
    // const itemListResult1 = await items.insertMany(itemList1);

    // 
    // const findItem1 = await items.find({ status: 'D' }).toArray();
    // console.log("findItem1", findItem1);

    // 문제5
    // const findItem2 = await items.find({ status: "A", qty: 50}).toArray();
    // console.log("findItem2", findItem2);

    // 문제6
    // const findItem3 = await items.find({ status: { $in: ["A", "B"]} }).toArray();
    // console.log("findItem3", findItem3);

    // 문제 7
    // const findItem4 = await items.find({ status: 'A', qty: {$lt: 30}}).toArray();
    // console.log("findItem4", findItem4);

    // 문제 8
    // const findItem5 = await items.find({ $or: [ { status: 'A' }, { qty: {$lt: 30 } } ]}).toArray();
    // console.log("findItem5", findItem5);

    // 문제 9

    await client.close();
}

run();