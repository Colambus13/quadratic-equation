module.exports = function solveEquation(equation) {

    var solurion_arr = [],
          a, b, c, D, x, x_1, x_2;
    var number_arg = equation.split(' ');

      a = +number_arg[0];
      b = +(number_arg[3] + number_arg[4]);
      c = +(number_arg[7] + number_arg[8]);
      D = b*b - 4*a*c;

    if(D > 0){
      x_1 = Math.round((-b + Math.sqrt(D))/(2*a)); solurion_arr.push(x_1);
      x_2 = Math.round((-b - Math.sqrt(D))/(2*a)); solurion_arr.push(x_2);
    }else if(D < 0){
           alert('уравнение не имеет корней');
       }else{
           x = Math.round(-b/2*a); solurion_arr.push(x);
       }

    function my_sort(a, b) {
        if(a > b) return 1;
        if(a < b) return -1;
    }

    return solurion_arr.sort(my_sort);

}
