// Summary: Output n factorial, the product of all positive integers <= n
// Output should be 40320
function fac(n) {
	if (n == 0)
		return 1;
	else
		return fac(n - 1) * n;
}
console.log(fac(3));
