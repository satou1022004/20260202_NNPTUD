module.exports = {
    ConvertTitleToSlug: function (title) {
        // Chuyển về chữ thường
        let result = title.toLowerCase();
        
        // Xử lý tiếng Việt có dấu
        result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        result = result.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        result = result.replace(/đ/g, 'd');
        
        // Xóa các ký tự đặc biệt, chỉ giữ lại chữ cái, số và khoảng trắng
        result = result.replace(/[^a-z0-9\s-]/g, '');
        
        // Thay thế khoảng trắng và nhiều dấu gạch ngang liên tiếp bằng 1 dấu gạch ngang
        result = result.replace(/\s+/g, '-');
        result = result.replace(/-+/g, '-');
        
        // Xóa dấu gạch ngang ở đầu và cuối
        result = result.replace(/^-+|-+$/g, '');
        
        return result;  // QUAN TRỌNG: return result, không phải title!
    }
}