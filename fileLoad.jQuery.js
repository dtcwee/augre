$(document).ready(function () {
    //check if browser supports file api and filereader features
    if (window.File && window.FileReader && window.FileList && window.Blob) {

        //this is not completely neccesary, just a nice function I found to make the file size format friendlier
        //http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
        function humanFileSize(bytes, si) {
            var thresh = si ? 1000 : 1024;
            if (bytes < thresh) return bytes + ' B';
            var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
            var u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while (bytes >= thresh);
            return bytes.toFixed(1) + ' ' + units[u];
        }

        //This function is called when a file is picked for loading.
        function loadModel(file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                data_url = event.target.result
                // console.log(data_url)
                // console.log(humanFileSize(file.size, "kB"))
                entity.setAttribute("gltf-model", data_url);
                //when the file is read it triggers the onload event above.
            }
            reader.readAsDataURL(file);
        }

        //watch for change on the file input
        $("#fileInput").change(function () {
            // console.log("Model file chosen.")
            // console.log($("#fileInput").val())
            loadModel(this.files[0])
        });

        //click on file input button = click on file input form
        $(".fileInputButton").on('click', function(){
            $(".fileInput").click();       
        });

        //JQueryUI format file input button
        $(".fileInputButton").button({
        });
    } else {

        alert('The File APIs are not fully supported in this browser.');

    }
});