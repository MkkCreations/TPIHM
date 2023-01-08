class VueTpNoté {
    init(form) {
        this._form = form;
        this.form.divAddAlbum.hidden = true;
        this.form.pError.hidden = true;
        this.form.listAlbum.disabled = false;
    }
    get form() { return this._form; }
    ;
    displayAddingForm() {
        this.form.divAddAlbum.hidden = false;
        this.form.listAlbum.disabled = true;
    }
    isNotMini() {
        Number(this.form.inpPists.value) < 5 ? this.form.inpMini.disabled = false : this.form.inpMini.disabled = true;
    }
    validateForm(e) {
        e.preventDefault();
        let dataForm = new FormData(this.form.form);
        let typeArtist = dataForm.get("inp_radio");
        let title = dataForm.get("title");
        let interpret = dataForm.get("interpret");
        let pists = dataForm.get("pists");
        console.log(typeArtist, title, interpret, pists);
        if (!typeArtist) {
            this.form.pError.hidden = false;
        }
        else if (title === "" || interpret === "" || Number(pists) <= 0) {
            this.form.pError.hidden = false;
        }
        else {
            let opt = document.createElement('option');
            opt.value = title.toString();
            opt.innerHTML = title + " " + interpret + " " + typeArtist + " " + pists + " Plages";
            this.form.listAlbum.appendChild(opt);
            this.numAlbum();
            this.init(this.form);
        }
    }
    cancelForm() {
        this.form.divAddAlbum.hidden = true;
        this.form.listAlbum.disabled = false;
    }
    deleteOption(opt) {
        console.log(opt);
        opt.remove(opt.selectedIndex);
        this.numAlbum();
    }
    numAlbum() {
        let n = this.form.listAlbum.options;
        this.form.numberAlbum.innerHTML = n.length.toString();
    }
}
let vueTpNoté = new VueTpNoté;
export { vueTpNoté };
//# sourceMappingURL=class.js.map