const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
            if(typeof collection === 'object'){
              let objValues = Object.values(collection)
              for(let i = 0; i < objValues.length; i++){
                callback(objValues[i])
              }
            }
            else{ 
             for(let i = 0; i < collection.length; i++){
                callback(collection[i])
              }
            }
            return collection
          },

    map: function(collection,callback) {
           let newArray = []
           if(typeof collection === 'object'){
             let objValues = Object.values(collection)
             for(let i = 0; i < objValues.length; i++){
               newArray.push(callback(objValues[i]))
             }
            }
            else{ 
              for(let i = 0; i < collection.length; i++){
                newArray.push(callback(collection[i]))
              }
            }
            return newArray
          },

    reduce: function(collection,callback,acc = 0) {
              for(let elem in collection){
                if(!acc){
                acc = collection[elem]
              }
              else{
                acc = callback(acc,collection[elem],collection)}
              }
              return acc
           
        
        
    },

    find: function(collection,predicate){
            for (let i = 0; i < collection.length; i++) {
              if ( predicate(collection[i])=== true) {
                let number = collection[i]
                return number
              }
            }
          },

    filter: function(collection,predicate){
              let filterArray = []
              for(let i = 0;i < collection.length; i++){
                if(predicate(collection[i]) === true){
                  filterArray.push(collection[i])
                }
              }
              return filterArray
            },

    size: function(collection){
            let arraySize = []
            let objValues = Object.values(collection)
            for(let i = 0; i < objValues.length; i++){
              arraySize.push(objValues[i])
            }
            return arraySize.length
          },

    functions: function(object){
                 let array = [];
                 for (let [key, value] of Object.entries(object)) {
                   if(typeof value === 'function'){
                     array.push(key)
                    }
                  }
                  return array.sort()
                },

    first: function(array,n){
             let newArray = []
             if(n){
               for(let i = 0; i < n; i++)
                 newArray.push(array[i])
                 return newArray
              }
              else{
                return array[0]
              }
            },

    last: function(array,n=1) {
            if(n!==1){
             return array.slice(-n)
            }
            else{
              return array[array.length-1]
            }
          },

    compact: function(array){
               let newArray = []
               for(let i = 0; i < array.length; i++){
                 if(array[i]){
                   newArray.push(array[i])
                  }
                }
                return newArray
              },

    sortBy: function(array,callback){
              let newArray = [...array]
              return newArray.sort(function(a,b){return callback(a) - callback(b)})
            },

    flatten: function(array,shallow = false){
                if(shallow){
                  return  array.flat(1)
                }
                else{
                 return  array.flat(Infinity)
                }
              },

    uniq: function(arr, isSorted=false,callback = null){
            if(isSorted === true ){
              return [...new Set(arr)]
            }
             else if(!callback){
             return Array.from(new Set(arr))
            }
            else{
              const modifiedVals = new Set()
              const uniqVals = new Set()

            for (let val of arr) {
                const moddedVal = callback(val)
                if (!modifiedVals.has(moddedVal)) {
                    modifiedVals.add(moddedVal)
                    uniqVals.add(val)
                }
              }
            return Array.from(uniqVals)
            }
          },

    
    
    keys: function(object){
            let newObj = Object.keys(object)
            return newObj
          },      

    values: function(object){
              let newObj = Object.values(object)
              return newObj
            }


  }
})()

fi.libraryMethod()
