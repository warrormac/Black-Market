import React from 'react';
import axios from 'axios';

import './add-content.styles.scss';

import Header from '../../components/header/header.component';
import AdminPanelTitle from '../../components/admin-panel-title/admin-panel-title.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class AddContent extends React.Component{

    state = {
        name: '',
        author: '',
        category: '',
        type: '',
        description: '',
        file: "",
        price: 0,
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value });
    }

    hanldeOnUploadFile = event => {
        this.setState({file : event.target.files[0]})
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("author", this.state.author);
        formData.append("category", this.state.category);
        formData.append("description", this.state.description);
        formData.append("type", this.state.type);
        formData.append("file", this.state.file);
        const cool = Number(this.state.price);
        formData.append("price", cool);


        axios.post("http://localhost:8000/upload-product", formData)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
        alert("ARCHIVO SUBIDO")
    };

    render(){
        return(
            <div className='add-content'>
                <Header/>
                <AdminPanelTitle title={"AGREGAR CONTENIDO"}/>
                <form  onSubmit={this.handleOnSubmit} className="new-product-data">
                    <div className="main-data">
                        <div>
                            <label>Titulo</label>
                            <FormInput type="text" name="name" className="title-input" onChange={this.handleOnChange}></FormInput>
                        </div>
                        <div>
                            <label>Autor</label>
                            <FormInput type="text" name="author" className="author-input" onChange={this.handleOnChange}></FormInput>
                        </div>
                        <div>
                            <label>Categoría</label>
                            <FormInput type="text" name="category" className="category-input" onChange={this.handleOnChange}></FormInput>
                        </div>
                        <div>
                            <label>Tipo</label>
                            <FormInput type="text" name="type" className="type-input" onChange={this.handleOnChange}></FormInput>
                        </div>
                        <div className="price">
                            <label>Precio</label>
                            <FormInput type="number" name="price" className="price-input" onChange={this.handleOnChange}></FormInput>
                        </div>
                    </div>

                    <div className="description">
                        <label>Descripción</label>
                        <FormInput type="text" name="description" className="description-input" onChange={this.handleOnChange}></FormInput>
                    </div>
                    
                    <div>
                    <input type="file" name="file" onChange={this.hanldeOnUploadFile}/>
                        
                    </div>
                    <CustomButton type="submit" greenButton>
                        Upload
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default AddContent;