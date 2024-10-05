let collegeName=new String("gnit college");
//Using startswith method():
console.log(collegeName.startsWith("gnit"));
console.log(collegeName.startsWith("Gnit"));
console.log(collegeName.startsWith("college"));
//Using endwith method():
console.log(collegeName.endsWith("gnit"));
console.log(collegeName.endsWith("college"));
console.log(collegeName.endsWith("College"));
//Using includes method():
console.log(collegeName.includes("gnit"));
console.log(collegeName.includes("college"));
//Using repeat method():
console.log(collegeName.repeat(2));
//Using backtique
console.log(`hi now i am studying in ${collegeName}`); 

