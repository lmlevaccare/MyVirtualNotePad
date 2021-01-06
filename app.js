
class Designer {
    constructor(design_Label,
        creative_Director,
        show_Year) {
    
        this.design_Label = design_Label;
        this.creative_Director = creative_Director;
        this.show_Year = show_Year;
        
}
}

class UI {
    static displayDesigners() {
        const StoredDesigners = [{
            design_Label: "Valentino",
            creative_Director: "Pierpaolo Piccioli",
            show_Year: 2019

        },
        {
            design_Label: "Dior",
            creative_Director: "Maria Grazia Chiuri ",
            show_Year: 2018
              
        },
        {
            design_Label: "St. Laurent",
            creative_Director: "Anthony Vaccarello",
            show_Year: 2017
              
        },
       
        {
            design_Label: "Dries Van Noten",
            creative_Director: "Dries Van Noten",
            show_Year: 2016
              
        }
        ];
        const designers = StoredDesigners
        designers.forEach((designer) => UI.addDesignertoList(designer));
    }

    static addDesignertoList(designer) {
        const list = document.querySelector("#design-list");
        const row = document.createElement('tr');

        row.innerHTML =
            `<td>${designer.design_Label}</td>
            <td>${designer.creative_Director}</td>
            <td>${designer.show_Year}</td>
             <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
        
        list.appendChild(row);
    }

    static deleteDesigner(el) {
        if (el.classList.contains('delete')) {
           
            el.parentElement.parentElement.remove();

        }

    }

    // static showAlert(message,className) {
    //     const div = document.createElement('div');
    //     div.className = `alert alert ${className}`;
    //     div.appendChild(document.createTextNode(message));
    //     const container = document.querySelector('container');
    //     const form = document.querySelector('#designer-form');
    //     Node.insertBefore(div,form)

    // }

    static clearFeilds() {
        document.querySelector("#design_Label").value = '';
        document.querySelector("#creative_Director").value='';
        document.querySelector("#show_Year").value = '';
    }
};

// event to display designers

document.addEventListener('DOMContentLoaded', UI.displayDesigners);

// event: add boook
document.querySelector('#design-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const design_Label= document.querySelector("#design_Label").value
    const creative_Director = document.querySelector("#creative_Director").value
      const show_Year = document.querySelector("#show_Year").value
    
    
 



    // Add book to UI list
     const designer = new Designer(design_Label, creative_Director, show_Year)
    UI.addDesignertoList(designer)
    // clear fileds
    UI.clearFeilds();

});

   // validate
    // if (design_Label === "" || creative_Director === ""||show_Year==="") {
    //     UI.showAlert("Fill in all Fields or you will forget!", 'danger');
    // }
    
    // // instantiate book
    //     else {  const designers = new Designer(design_Label, creative_Director, show_Year)
    // }
    // console.log(designer)

// event remove book -target deisgner in list

document.querySelector('#design-list').addEventListener('click', (e) => {
    
  UI.deleteDesigner(e.target)

}
);
