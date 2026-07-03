import React from "react";
import StatCard from "./StatCard";

const Stats = () => {

const stats=[

{
number:"245K",
title:"Customers"
},

{
number:"82%",
title:"Satisfied"
},

{
number:"120+",
title:"Segments"
},

{
number:"$84K",
title:"Avg Income"
}

];

return(

<div className="grid grid-cols-2 gap-5 mt-10">

{
stats.map((item,index)=>(
<StatCard
key={index}
number={item.number}
title={item.title}
/>
))
}

</div>

);

};

export default Stats;