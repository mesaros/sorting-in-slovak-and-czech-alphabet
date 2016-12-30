/**
 * @package    Sort_SK_CZ JavaScript
 * @version    1.0.4
 * @date       Sun, 31 Dec 2016 00:46:12 +0100, Slovakia
 * @author     Robert Mesaros
 * @copyright  Copyright © 2016 Robert Mesaros, rmSOFT
 * @web        http://www.rmsoft.sk
 * @link       http://www.rmsoft.sk/en/portfolio/programming-work/web-services/data-sorting-in-slovak-and-czech-alphabet
 *
 * @donate     https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BB4D8Y28YZDH6
 *
 * @license    MIT: http://mit-license.org/
 *             Permission is hereby granted, free of charge, to any person obtaining a copy of
 *             this software and associated documentation files (the "Software"), to deal in
 *             the Software without restriction, including without limitation the rights to use,
 *             copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 *             Software, and to permit persons to whom the Software is furnished to do so,
 *             subject to the following conditions:
 *
 *             The above copyright notice and this permission notice shall be
 *             included in all copies or substantial portions of the Software.
 *
 *             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 *             INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 *             PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 *             HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 *             OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 *             SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @code       text/javascript; charset=UTF-8
 */


var token_sk_cz = {
	'Á': 'A', 'Ä': 'A', 'Č': 'C', 'Ď': 'D', 'DZ': 'D', 'Dz': 'D', 'DŽ': 'D', 'Dž': 'D',
	'É': 'E', 'Ě': 'E', 'CH': 'H', 'Ch': 'H', 'Í': 'I', 'Ĺ': 'L', 'Ľ': 'L', 'Ň': 'N',
	'Ó': 'O', 'Ô': 'O', 'Ö': 'O', 'Ő': 'O', 'Ŕ': 'R', 'Ř': 'R', 'Š': 'S', 'Ť': 'T',
	'Ú': 'U', 'Ů': 'U', 'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Ž': 'Z',

	'á': 'a', 'ä': 'a', 'č': 'c', 'ď': 'd', 'dZ': 'd', 'dz': 'd', 'dŽ': 'd', 'dž': 'd',
	'é': 'e', 'ě': 'e', 'cH': 'h', 'ch': 'h', 'í': 'i', 'ĺ': 'l', 'ľ': 'l', 'ň': 'n',
	'ó': 'o', 'ô': 'o', 'ö': 'o', 'ő': 'o', 'ŕ': 'r', 'ř': 'r', 'š': 's', 'ť': 't',
	'ú': 'u', 'ů': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'ž': 'z'
};

var str_c1_sk_cz = "cC", str_c2_sk_cz = "hH";
var str_d1_sk_cz = "dD", str_d2_sk_cz = "zZžŽ";

var keys_sk_cz = [];
for (var key in token_sk_cz) {
	keys_sk_cz.push(key);
}

var way = 1; // ascending (vzostupne) A-Z
// var way = -1; // descending (zostupne) Z-A

var char_a, char_b;
var char_ma, char_mb;
var move_a, move_b;
var code_a, code_b;
var size_a, size_b;

function sort_SK_CZ(a, b) {
	if (a === b) return 0;

	var i = 0;
	var j = 0;

	size_a = a.length;
	size_b = b.length;

	while (i < size_a && j < size_b) {
		char_ma = a[i];
		if (str_c1_sk_cz.indexOf(a[i]) >= 0) // ch
			if ((i < size_a - 1) && (str_c2_sk_cz.indexOf(a[i + 1]) >= 0)) {
				char_ma = a[i].concat(a[i + 1]);
				i++;
			}
		if (str_d1_sk_cz.indexOf(a[i]) >= 0) // dz, dž
			if ((i < size_a - 1) && (str_d2_sk_cz.indexOf(a[i + 1]) >= 0)) {
				char_ma = a[i].concat(a[i + 1]);
				i++;
			}
		char_a = token_sk_cz[char_ma];

		char_mb = b[j];
		if (str_c1_sk_cz.indexOf(b[j]) >= 0) // ch
			if ((j < size_b - 1) && (str_c2_sk_cz.indexOf(b[j + 1]) >= 0)) {
				char_mb = b[j].concat(b[j + 1]);
				j++;
			}
		if (str_d1_sk_cz.indexOf(b[j]) >= 0) // dz, dž
			if ((j < size_b - 1) && (str_d2_sk_cz.indexOf(b[j + 1]) >= 0)) {
				char_mb = b[j].concat(b[j + 1]);
				j++;
			}
		char_b = token_sk_cz[char_mb];

		move_a = move_b = 0.2;

		if (char_a === char_b && char_a !== undefined) {
			if (keys_sk_cz.indexOf(char_ma) > keys_sk_cz.indexOf(char_mb)) move_a *= 2;
			if (keys_sk_cz.indexOf(char_ma) < keys_sk_cz.indexOf(char_mb)) move_b *= 2;
		}

		code_a = (char_a) ? char_a.charCodeAt(0) + move_a : char_ma.charCodeAt(0);
		code_b = (char_b) ? char_b.charCodeAt(0) + move_b : char_mb.charCodeAt(0);

		if (code_a != code_b) break;
		i++;
		j++;
	}

	if (i == size_a) return -way;
	if (j == size_b) return way;

	return code_a * way - code_b * way;
}
