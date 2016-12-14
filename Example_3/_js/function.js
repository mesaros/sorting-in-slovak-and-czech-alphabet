/**
 * Sorting the data by clicking on the header of the table
 * (Triedenie dat po kliknuti na hlavicku tabulky)
 * @author       Robert Mesaros
 * @copyright    2016 rmSOFT
 * @link         http://www.rmsoft.sk
 */
$(document).ready(function() {
	$('table.tab_sort').each(function() {
		var $table = $(this);

		$('th', $table).each(function(column) {
			var $header = $(this);

			if ($header.is('.sort_char')) {
				$header.click(function() {
					way = 1;                              //  1 = ascending (vzostupne) A-Z
					if ($header.is('.way_asc')) way = -1; // -1 = descending (zostupne) Z-A

					var rows = $table.find('tbody > tr').get();
					
					$.each(rows, function(index, row) {
						var $cell = $(row).children('td').eq(column);

						row.sortKey = $cell.text();
						// row.sortKey = $cell.text().toUpperCase(); // not a requirement (nie je podmienkou)

					});

					rows.sort(function(a, b) {
						return sort_SK_CZ(a.sortKey, b.sortKey);
					});
					
					$.each(rows, function(index, row) {
						$table.children('tbody').append(row);
						row.sortKey = null;
					});

					$table.find('th').removeClass('way_asc')
						.removeClass('way_desc');
					
					if (way==1) $header.addClass('way_asc');
						else $header.addClass('way_desc');
				});
			}
		});
	});
});
