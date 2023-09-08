import React from 'react'
import '../css/blogdesc.css'
import { useParams } from 'react-router-dom'
import { blogdata } from '../components/blogdata'
import Footer from '../components/Footer'

const Blogdesc = () => {
    const { id } = useParams();
    const product = blogdata.find((p) => p.id === parseInt(id));
  
  return (
    <>
          <div className="shopHeader">
        <h1>The Blog</h1>
        <p>Home {">>"}Food{">>"}{product.name}</p>
      </div>
      <div className="imgBox">
      <img src={product.img} alt="chicken-biryani" />
    </div>
    <div className="whole">
      <div className="subwhole">
        <div className="box">
          <br />
          <p>{product.date}</p>
          <h1>{product.name}</h1>
          <p>
            FOOD, NONVEG,
            RECIPE
          </p>
        </div>
      </div>

      <div className="para">
        <p className="bold1">
          {product.heading}
        </p>
        <p className="greytext">
          {product.subHead}
        </p>
        <h3>Ingredients of {product.name} (5 Serving)</h3>
        <ul className="greytext">
          <li>{product.ingredients[0]}</li>
          <li>{product.ingredients[1]}</li>
          <li>{product.ingredients[2]}</li>
          <li>2 tablespoon refined oil</li>
          <li>3 green cardamom</li>
          <li>2 clove</li>
          <li>2 onion</li>
          <li>1 teaspoon turmeric</li>
          <li>1 tablespoon garlic paste</li>
          <li>1 cup hung curd</li>
          <li>2 tablespoon coriander leaves</li>
          <li>water as required</li>
          <li>1 tablespoon ghee</li>
          <li>600 gm chicken</li>
          <li>1 tablespoon garam masala powder</li>
          <li>1 teaspoon saffron</li>
          <li>1 tablespoon bay leaf</li>
          <li>1 black cardamom</li>
          <li>1 teaspoon cumin seeds</li>
          <li>4 green chillies</li>
          <li>1 tablespoon ginger paste</li>
          <li>1 teaspoon red chilli powder</li>
          <li>1/2 tablespoon ginger</li>
          <li>2 drops kewra</li>
          <li>1 tablespoon rose water</li>
        </ul>
        <p className="steps">Step 1 Prepare saffron and kewra water</p>
        <p className="greytext">
          To make this delightful biryani, soak saffron in water to prepare
          saffron water. Next, mix kewra drops in water and mix well to make
          kewra water.
        </p>
        <p className="steps">Step 2 Saute onions and tomatoes for 2-3 minute</p>
        <p className="greytext">
          In the meanwhile, heat refined oil in a deep bottomed pan. Once the
          oil is hot enough. Add cumin seeds, bay leaf, green cardamom, black
          cardamom, cloves in it, and saute for about a minute. Then, add
          chopped onion in it and saute until pink. Now, add chicken into it
          with slit green chillies, turmeric, salt to taste, ginger garlic
          paste, red chilli powder, and green className="steps" chilli paste. Mix
          well all the spices and cook for 2-3 minutes. Then, add hung curd into
          it
        </p>
        <p className="steps">Step 3 Cook on low heat for 5-6 minutes</p>
        <p className="greytext">
          Turn the flame to medium again and add garam masala in it along with
          ginger julienned, coriander and mint leaves. Add kewra water, rose
          water and saffron water in it. Cook till the chicken is tender.
        </p>
        <p className="steps">
          Step 4 Serve hot with your favourite chutney or raita
        </p>
        <p className="greytext">
          Then add 1 cup cooked rice and spread evenly. Then add saffron water
          and pour ghee over it. Cook for 15-20 minutes with closed lid and
          garnish with 1 tbsp fried onions and coriander leaves. Serve hot.
        </p>
        <div className="social-links">
          <a className='blogIcon' href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a className='blogIcon' href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className='blogIcon' href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className='blogIcon' href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>  
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blogdesc