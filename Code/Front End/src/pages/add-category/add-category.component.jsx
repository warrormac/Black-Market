import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../../components/header/header.component';
import AdminPanelTitle from '../../components/admin-panel-title/admin-panel-title.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import './add-category.styles.scss';

const AddCategory = () => {
  const [currentCategory, setCurrentCategory] = useState({});
  const [currentSubCategories, setCurrentSubCategories] = useState([]);

  const handleLoadAll = () => {
    axios.get('http://localhost:8000/get-category', {params: 
      {
        id: '60b0623f47cb453294db278f'
      }
    })
    .then(res => {
      setCurrentCategory(res.data)
    }).catch(error=>console.log(error))
  }

  const loadSubCategories = () => {

    if(currentCategory.subcategories){
      let subCategoriesList = [];
      currentCategory.subcategories.map(element =>{
        axios.get('http://localhost:8000/get-category', {params: 
          {
            id: element
          }
        })
        .then(res => {
          subCategoriesList.push(res.data)

        }).catch(error=>console.log(error))
        })
      setCurrentSubCategories(subCategoriesList);
    }

    }

  const handleClick = () => {
    // currentCategory
    // axios.post("http://localhost:8000/add-category", formData)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err));
    //     alert("ARCHIVO SUBIDO")
  }


  useEffect(() => {handleLoadAll(); loadSubCategories();}, []);


  return(
    <div className='add-category'>
      <div>
        <Header/>
        <AdminPanelTitle title={"AGREGAR CATEGORÍA"}/>
        <FormInput></FormInput>
        <CustomButton>Ingresar Categoria</CustomButton>

      </div>
      {
        <CustomButton>{currentSubCategories[0]?currentSubCategories[0].name:null}</CustomButton>
        //console.log(currentSubCategories[0]?currentSubCategories[0].name:null)
      }
      {
        console.log(currentSubCategories[0])
      }
    </div>
  )
}

export default AddCategory;
