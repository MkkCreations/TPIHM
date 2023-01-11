class VueTpNoté {
    init(form) {
        this._form = form;
        this.form.divAddAlbum.hidden = true;
        this.form.pError.hidden = true;
        this.form.divConfirmDelete.hidden = true;
        this.form.listAlbum.disabled = false;
    }
    get form() { return this._form; }
    ;
    displayAddingForm() {
        this.form.divAddAlbum.hidden = false;
        this.form.listAlbum.disabled = true;
        this.form.divConfirmDelete.hidden = true;
        this.form.listAlbum.selectedIndex = -1;
    }
    isNotMini() {
        if (Number(this.form.inpPists.value) < 5) {
            this.form.inpMini.disabled = false;
        }
        else {
            this.form.inpMini.checked = false;
            this.form.inpMini.disabled = true;
        }
    }
    validateForm(e) {
        e.preventDefault();
        let dataForm = new FormData(this.form.form);
        const typeArtist = dataForm.get("inp_radio");
        const title = dataForm.get("title").toString().trim();
        const interpret = dataForm.get("interpret").toString().trim();
        const pists = dataForm.get("pists");
        const mini = this.form.inpMini.checked;
        if (!typeArtist) {
            this.form.pError.hidden = false;
        }
        else if (title === "" || interpret === "" || Number(pists) <= 0) {
            this.form.pError.hidden = false;
        }
        else {
            let opt = document.createElement('option');
            let isMini = mini ? 'Mini Album - ' : '';
            opt.value = title.toString();
            opt.innerHTML = title + " - " + interpret + " - " + typeArtist + " - " + isMini + pists + " Plages ";
            this.form.listAlbum.appendChild(opt);
            this.numAlbum();
            this.init(this.form);
            this.resetForm();
        }
    }
    resetForm() {
        this.form.radioBand.checked = false;
        this.form.radioOther.checked = false;
        this.form.radioSolist.checked = false;
        this.form.inpMini.checked = false;
        this.form.inpTitle.value = "";
        this.form.inpInterpret.value = "";
        this.form.inpPists.value = "";
    }
    cancelForm() {
        this.resetForm();
        this.form.divAddAlbum.hidden = true;
        this.form.listAlbum.disabled = false;
    }
    confirmDelete() {
        if (this.form.listAlbum.options.selectedIndex != -1)
            this.form.divConfirmDelete.hidden = false;
        this.form.btnConfirmDelete.addEventListener('click', () => { this.deleteOption(this.form.listAlbum.options); });
        this.form.btnCancelDelete.addEventListener('click', () => {
            this.form.divConfirmDelete.hidden = true;
            this.form.listAlbum.selectedIndex = -1;
        });
    }
    deleteOption(opt) {
        opt.remove(opt.selectedIndex);
        this.form.divConfirmDelete.hidden = true;
        this.numAlbum();
    }
    numAlbum() {
        const n = this.form.listAlbum.options;
        this.form.numberAlbum.innerHTML = n.length.toString();
    }
}
let vueTpNoté = new VueTpNoté();
export { vueTpNoté };
//# sourceMappingURL=class.js.map