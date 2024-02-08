import React from 'react'

function Categories(){
	const[activeIndex, setActiveIndex] = React.useState(0)

	const categories =["Все","мясныe","Вегетарианские","Гриль","Острые","Закрытые"	]
	
	const onClickClickCategory =( index ) => {
		setActiveIndex(index)
	};
	return(
	<div className="categories">
	<ul>
	{categories.map((value, i)=> (
		<li onClick={()=> onClickClickCategory(i)} className={activeIndex === i ? "active" : ''}>
			{value}
			</li>
	))}
	</ul> 
</div>
	);
}

export default Categories;