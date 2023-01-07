
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
    pError: HTMLParagraphElement
}

class VueTpNoté {
    private _form: HtmlForm;

    init(form: HtmlForm) {
        this._form = form;
        this.form.divAddAlbum.hidden = true;
        this.form.pError.hidden = true;
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
        let solist = this.form.radioSolist;
        let band = this.form.radioBand;
        let other = this.form.radioOther;
        let title = this.form.inpTitle.value;
        let interpret = this.form.inpInterpret.value;
        let pists = this.form.inpPists.value;

       /*  if(!solist.checked && !band.checked && !other.checked){
            this.form.pError.hidden = false;
        }else if(title.length === 0 || interpret.length === 0 || Number(pists) <= 0){
            this.form.pError.hidden = false;
        }else {
            let opt = document.createElement('option');
            opt.value = title;
            if(solist.checked ){
                opt.innerHTML = title + " " + interpret + " " + solist.value + " " + pists + " Plages";
            }else if(band.checked){
                opt.innerHTML = title + " " + interpret + " " + band.value + " " + pists + " Plages";
            }else {
                opt.innerHTML = title + " " + interpret + " " + other.value + " " + pists + " Plages";
            }
            this.form.listAlbum.appendChild(opt);
        }
        this.numAlbum();
        this.init(this.form); */
    }
/*     cancelForm(): void {
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
    } */


}
let vueTpNoté = new VueTpNoté;

export { vueTpNoté };
