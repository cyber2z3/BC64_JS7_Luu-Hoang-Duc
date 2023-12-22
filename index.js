// Input number 
var a = [10,1,2,4,9,-20,-23,0]
document.getElementById('enterBtn').onclick = function(){
    var newElement = document.getElementById('enterNum').value*1;
    // console.log(newElement)
    a.push(newElement);
    document.getElementById('displayArr').innerHTML = a;
}


// Câu 1: tính tổng các số dương trong mảng
document.getElementById('btn1').onclick = function(){
    var sum = 0; 
    for (var i=0; i<a.length; i++){
        if (a[i]>0) sum+=a[i]
    }
    document.getElementById('kq1').innerHTML = `Tổng số dương: ${sum}`
}


// 2. Đếm có bao nhiêu số dương trong mảng.
document.getElementById('btn2').onclick = function(){
    var positiveNum = countPosNumber(a); 
    document.getElementById('kq2').innerHTML = `Số dương: ${positiveNum}`
}


// 3. Tìm số nhỏ nhất trong mảng.
document.getElementById('btn3').onclick = function(){
    var min = findMin(a);
    document.getElementById('kq3').innerHTML = `Số nhỏ nhất: ${min}`
}
function findMin(a){
    var min=a[0]; 
    if (a.length==1){
        return a[0];
    }
    for (var i=0; i<a.length; i++){
        if (min>a[i]) min = a[i];
    }
    return min; 
}

// 4. Tìm số dương nhỏ nhất trong mảng.
document.getElementById('btn4').onclick = function(){
    var min = findPosMin(a);
    document.getElementById('kq4').innerHTML = `Số dương nhỏ nhất: ${min}`
}
function findPosMin(a){
    var min, i=0;
    // tìm phần tử số dương đầu tiên
    for (i; i<a.length; i++){
        if (a[i]>0) break; 
    }
    console.log(`a[${i}]: ${a[i]}`)

    // Nếu không có số dương 
    if (i==a.length) 
        return "Không có số dương trong mảng"
    // Nếu có số dương 
    else{
        min = a[i]
        for (i; i<a.length; i++){
            if (a[i]>0 && min>a[i]) 
                min = a[i]
        }
        return min
    }
}

// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
document.getElementById('btn5').onclick = function(){
    var lastEven = findLastEvenNum(a);
    document.getElementById('kq5').innerHTML = `Số chẵn cuối cùng: ${lastEven}`
}
function findLastEvenNum(a){
    console.log("a.length "+a.length)
    for (var i=a.length-1; i>=0; i--){
        console.log(i)
        if (a[i]%2==0) return a[i]
    }return -1;
}

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
document.getElementById('btn6').onclick = function(){
    var index1 = document.getElementById('num1').value*1
    var index2 = document.getElementById('num2').value*1
    console.log(num1)
    console.log(num2)

    var newArr = swapIndex(a, index1, index2);

    document.getElementById('kq6').innerHTML = `Mảng mới: ${newArr}`;
}
function swapIndex(a, i, j){
    if (i>a.length || i<0 || j>a.length || j<0){
        return "Vị trí không nằm trong mảng"
    }else if (i == j){
        return a; 

    }else{
        var mid = a[i];
        a[i] = a[j];
        a[j] = mid; 
    }
    return a; 
}

// 7. Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById('btn7').onclick = function(){
    a.sort(function(a,b){
        return a-b;
    });
    document.getElementById('kq7').innerHTML = 
        `Mảng sau khi được sắp xếp ${a}`
}

// 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
document.getElementById('btn8').onclick = function(){
    var primeNumber = firstPrime(a);
    if (primeNumber == -1){
        document.getElementById('kq8').innerHTML = "Không có số nguyên tố"
    }else 
        document.getElementById('kq8').innerHTML = primeNumber;
}
function firstPrime(a){
    for (var i=0; i<a.length; i++){
        if (checkPrime(a[i]))
            return a[i];
    }
    return -1;
}
function checkPrime(n){
    if (n<=1) 
        return false;
    for (var i=2; i<Math.sqrt(n); i++){
            if (n%i==0)
                return false;
        }
    return true; 
}

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var a2=[]
document.getElementById('enterBtn2').onclick = function(){
    var num = document.getElementById('inputNum2').value*1;
    a2.push(num);    
    document.getElementById('arrDisplay_2').innerHTML = a2; 
}
document.getElementById('demSoNguyen').onclick = function(){
    var tongSoNguyen = soNguyen(a2);
    document.getElementById('soNguyen').innerHTML = 
        `Số nguyên: ${tongSoNguyen}`
}
function soNguyen(a){
    var count=0; 
    for (var i=0; i<a.length;i++){
        if (Number.isInteger(a[i])) 
            count++;
    }
    return count;
}

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
document.getElementById('btn10').onclick = function(){
    var pos = countPosNumber(a);
    var nega = countNegaNumber(a);
    console.log(nega)
    console.log(pos)

    if (pos>nega)
        document.getElementById('kq10').innerHTML = "Số dương > số âm"
    else 
        document.getElementById('kq10').innerHTML = "Số dương < số âm"   
}
function countNegaNumber(a){
    var count=0;
    for (var i=0; i<a.length; i++){
        if (a[i]<0) count++;
    }
    return count;
}
function countPosNumber(a){
    var count = 0; 
    for (var i=0; i<a.length; i++){
        if (a[i]>0) count++
    }
    return count
}