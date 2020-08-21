$(document).ready(function () {
    $("#positionButtonSet").buttonset();
  
    $(".positionButton").click(function (e) {
      e.preventDefault();
    //   console.log(this.value);
      this.positionFactor = Number(this.value);
      this.initialPosition = entity.object3D.position.clone();
      entity.object3D.position.y = this.initialPosition.y + this.positionFactor;
    });
  
  });