class VueTpNoté {
    init(form) {
        this._form = form;
        this.form.divAddAlbum.hidden = true;
        this.form.pError.hidden = true;
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
        let solist = this.form.radioSolist;
        let band = this.form.radioBand;
        let other = this.form.radioOther;
        let title = this.form.inpTitle.value;
        let interpret = this.form.inpInterpret.value;
        let pists = this.form.inpPists.value;
        if (!solist.checked && !band.checked && !other.checked) {
            this.form.pError.hidden = false;
        }
        else if (title.length === 0 || interpret.length === 0 || pists.length === 0) {
            this.form.pError.hidden = false;
        }
        else {
            let opt = document.createElement('option');
            opt.value = title;
            if (solist.checked) {
                opt.innerHTML = title + " " + interpret + " " + solist.value + " " + pists + " Plages";
            }
            else if (band.checked) {
                opt.innerHTML = title + " " + interpret + " " + band.value + " " + pists + " Plages";
            }
            else {
                opt.innerHTML = title + " " + interpret + " " + other.value + " " + pists + " Plages";
            }
            this.form.listAlbum.appendChild(opt);
        }
        this.numAlbum();
        this.init(this.form);
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