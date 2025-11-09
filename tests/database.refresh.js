const db = require("../database");

let count = 0

console.log("****************************************")
console.log("Deleting data...")  

const sql = 'DELETE FROM questions'

db.run(sql, [], function(err){
    if(err) throw err

    console.log("Questions: All data deleted")
    count++

    const sql = 'DELETE FROM bids'

    db.run(sql, [], function(err){
        if(err) throw err
    
        console.log("Bids: All data deleted")
        count++
    
        const sql = 'DELETE FROM items'
    
        db.run(sql, [], function(err){
            if(err) throw err
        
            console.log("Items: All data deleted")
            count++

            const sql = 'DELETE FROM users'
    
            db.run(sql, [], function(err){
                if(err) throw err
        
                console.log("Users: All data deleted")
                count++

                const sql = "UPDATE `sqlite_sequence` SET `seq` = 0 WHERE `name` = 'users'";

                db.run(sql, [], function(err){
                    if(err) throw err

                    console.log("Users: reset ID counter")
                    count++

                    const sql = "UPDATE `sqlite_sequence` SET `seq` = 0 WHERE `name` = 'items'";
                    db.run(sql, [], function(err){
                        if(err) throw err

                        console.log("Items: reset ID counter")
                        count++

                        const sql = "UPDATE `sqlite_sequence` SET `seq` = 0 WHERE `name` = 'bids'";
                        db.run(sql, [], function(err){
                            if(err) throw err

                            console.log("Bids: reset ID counter")
                            count++

                            const sql = "UPDATE `sqlite_sequence` SET `seq` = 0 WHERE `name` = 'questions'";
                            db.run(sql, [], function(err){
                                if(err) throw err

                                console.log("Questions: reset ID counter")
                                count++

                                db.run("DELETE FROM item_categories", (err) => {
                                    if (err) console.log("Error wiping item_categories");
                                    else console.log("Item-Categories: All data deleted");
                                
                                    db.run("DELETE FROM categories", (err) => {
                                        if (err) console.log("Error wiping categories");
                                        else console.log("Categories: All data deleted");
                                    
                                        db.run("DELETE FROM sqlite_sequence WHERE name='categories'", (err) => {
                                            if (err) console.log("Error resetting categories ID counter");
                                            else console.log("Categories: reset ID counter");

                                            console.log("All data deleted from all tables") 
                                            console.log("****************************************")
                                        })
                                    })
                                })                      
                            })
                        })
                    })
                })       
            })
        })
    })
})
