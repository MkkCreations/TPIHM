
type HtmlForm = {
    numberAlbum: HTMLParagraphElement,
    listAlbum: HTMLSelectElement,
    btnAddAlbum: HTMLButtonElement,
    btnDeleteAlbum: HTMLButtonElement,
    btnConfirmDelete: HTMLButtonElement,
    btnCancelDelete: HTMLButtonElement,
    radioSolist: HTMLInputElement,
    radioBand: HTMLInputElement,
    radioOther: HTMLInputElement,
    inpTitle: HTMLInputElement,
    inpInterpret: HTMLInputElement,
    inpPists: HTMLInputElement,
    inpMini: HTMLInputElement,
    btnConfirm: HTMLButtonElement,
    btnCancel: HTMLButtonElement,
    divAddAlbum: HTMLDivElement,
    pError: HTMLParagraphElement,
    form: HTMLFormElement
}

class VueTpNoté {
    private _form: HtmlForm;

    init(form: HtmlForm) {
        this._form = form;
        this.form.divAddAlbum.hidden = true;
        this.form.pError.hidden = true;
        this.form.listAlbum.disabled = false;
    }
    get form(): HtmlForm {return this._form};

    displayAddingForm(): void {
        this.form.divAddAlbum.hidden = false;
        this.form.listAlbum.disabled = true;

    }
    isNotMini(): void {
        Number(this.form.inpPists.value) < 5 ? this.form.inpMini.disabled = false :  this.form.inpMini.disabled = true;
    }
    validateForm(e:Event): void {
        e.preventDefault();
        let dataForm = new FormData(this.form.form);
        let typeArtist = dataForm.get("inp_radio");
        let title = dataForm.get("title");
        let interpret = dataForm.get("interpret");
        let pists = dataForm.get("pists");
        console.log(typeArtist, title, interpret, pists);
        
        if(!typeArtist){
            this.form.pError.hidden = false;
        }else if(title === "" || interpret === "" || Number(pists) <= 0){
            this.form.pError.hidden = false;
        }else {
            let opt = document.createElement('option');
            opt.value = title.toString();
            opt.innerHTML = title + " " + interpret + " " + typeArtist + " " + pists + " Plages";
            this.form.listAlbum.appendChild(opt);
            
            this.numAlbum();
            this.init(this.form);
        }
    }
    cancelForm(): void {
        this.form.divAddAlbum.hidden = true;
        this.form.listAlbum.disabled = false;
    }
    deleteOption(opt: HTMLOptionsCollection): void {
        console.log(opt);
        opt.remove(opt.selectedIndex);
        this.numAlbum();
    }
    numAlbum(): void {
        let n = this.form.listAlbum.options;
        this.form.numberAlbum.innerHTML = n.length.toString();
    }


}
let vueTpNoté = new VueTpNoté;

export { vueTpNoté };
