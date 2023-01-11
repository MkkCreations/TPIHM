import { vueTpNoté } from './class.js';
vueTpNoté.init({
    numberAlbum: document.querySelector("[id=num_albums]"),
    listAlbum: document.querySelector("[id=album_list]"),
    btnAddAlbum: document.querySelector("[id=btn_add]"),
    btnDeleteAlbum: document.querySelector("[id=btn_delete]"),
    btnConfirmDelete: document.querySelector("[id=btn_yes]"),
    btnCancelDelete: document.querySelector("[id=btn_no]"),
    divConfirmDelete: document.querySelector("[id=confirmation]"),
    radioSolist: document.querySelector("[id=inp_solist]"),
    radioBand: document.querySelector("[id=inp_band]"),
    radioOther: document.querySelector("[id=inp_other]"),
    inpTitle: document.querySelector("[id=inp_title]"),
    inpInterpret: document.querySelector("[id=inp_interpret]"),
    inpPists: document.querySelector("[id=inp_pists]"),
    inpMini: document.querySelector("[id=inp_mini]"),
    btnConfirm: document.querySelector("[id=btn_confirm]"),
    btnCancel: document.querySelector("[id=btn_cancel]"),
    divAddAlbum: document.querySelector("[id=add_album]"),
    pError: document.querySelector("[id=error]"),
    form: document.querySelector("[id=form]")
});
vueTpNoté.form.btnAddAlbum.addEventListener('click', () => { vueTpNoté.displayAddingForm(); });
vueTpNoté.form.inpPists.addEventListener('change', () => { vueTpNoté.isNotMini(); });
vueTpNoté.form.btnConfirm.addEventListener('click', (event) => { vueTpNoté.validateForm(event); });
vueTpNoté.form.btnCancel.addEventListener('click', () => { vueTpNoté.cancelForm(); });
vueTpNoté.form.btnDeleteAlbum.addEventListener('click', () => { vueTpNoté.confirmDelete(); });
//# sourceMappingURL=app.js.map