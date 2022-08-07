// fungsi memasukan angka pada tombol
function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}

// fungsi c
function c() {
  document.form.textView.value = "";
}

// fungsi del
function del() {
  var x = document.form.textView.value;
  document.form.textView.value = x.substring(0, x.length - 1);
}

// fungsi hitung
function equal() {
  document.form.textView.value = eval(document.form.textView.value);
}
