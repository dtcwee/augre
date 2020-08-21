$(document).ready(function () {
  $("#scaleButtonSet").buttonset();

  $(".scaleButton").click(function (e) {
    e.preventDefault();
    // console.log(this.value);
    this.scaleFactor = Number(this.value);
    this.initialScale = entity.object3D.scale.clone();
    entity.object3D.scale.x = this.scaleFactor * this.initialScale.x;
    entity.object3D.scale.y = this.scaleFactor * this.initialScale.y;
    entity.object3D.scale.z = this.scaleFactor * this.initialScale.z;
  });

});