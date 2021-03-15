var chessBoard = {
    chess:document.getElementById('game'),
    createMap () {
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
        const rows = [0, 1,2,3,4,5,6,7,8, 0];
        for (let row = 0; row < rows.length; row++) {
            var tr = document.createElement('tr');
            this.chess.appendChild(tr);
            for (let col = 0; col < cols.length; col++) {
                var td = document.createElement('td');
                td.style.width = '30px';
                td.style.height = '30px';
                td.style.textAlign = 'center';
                td.style.border = 'none';
                tr.appendChild(td);
                if  (rows[row] == 0 && cols[col] !=0) {
                    td.innerHTML = cols[col];
                } else if  (cols[col] == 0 && rows[row] !=0) {
                    td.innerHTML = rows[row];
                } else if (rows[row] == 0 && cols[col] ==0){
                    //do nothing
                } else  if ((row+col) % 2 == 0) {
                    td.style.backgroundColor = 'black';
                } else {
                    td.style.backgroundColor = '#FFF4C7'
                }
            }   
        }
    },
}
chessBoard.createMap()


