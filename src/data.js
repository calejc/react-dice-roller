// --------- //
//   Chars   //
// --------- //
const horizontal = "\u2500";
const upperLeft = "\u256D" ;
const upperRight = "\u256E";
const vertical = "\u2502";
const fullSpace = "\u2007";
const halfSpace = "\u2009"
const lowerLeft = "\u2570";
const lowerRight = "\u256F";


// ---------- //
//   Pieces   // 
// ---------- //
const TOP = upperLeft + horizontal.repeat(9) + upperRight;
const BOTTOM = lowerLeft + horizontal.repeat(9) + lowerRight;
const BLANK = vertical + "   ".repeat(5) + "  " + vertical;
const DOT_MIDDLE = vertical + fullSpace.repeat(3) + halfSpace.repeat(2) + "O" + fullSpace.repeat(3) + halfSpace.repeat(2) + vertical;
const DOT_LEFT = vertical + halfSpace.repeat(2) + "O" + fullSpace.repeat(6) + halfSpace.repeat(2) + vertical;
const DOT_RIGHT = vertical + fullSpace.repeat(6) + halfSpace.repeat(2) + "O" + halfSpace.repeat(2) + vertical;
const TWO_DOTS = vertical + halfSpace.repeat(2) + "O" + fullSpace.repeat(1) + halfSpace.repeat(12) + "O" + halfSpace.repeat(2) + vertical;
 

// ---------------- //
//   Dice strings   //
// ---------------- //
export const diceArt = {
    1: TOP + "\n" + 
        BLANK + "\n" +
        DOT_MIDDLE + "\n" +
        BLANK + "\n" +
        BOTTOM
        ,
    2: TOP + "\n" + 
        DOT_RIGHT + "\n" + 
        BLANK + "\n" + 
        DOT_LEFT + "\n" + 
        BOTTOM
    ,
    3: TOP + "\n" + 
        DOT_RIGHT + "\n" + 
        DOT_MIDDLE + "\n" + 
        DOT_LEFT + "\n" + 
        BOTTOM
    ,
    4: TOP + "\n" + 
        TWO_DOTS + "\n" + 
        BLANK + "\n" + 
        TWO_DOTS + "\n" + 
        BOTTOM 
    ,
    5: TOP + "\n" + 
        TWO_DOTS + "\n" + 
        DOT_MIDDLE + "\n" + 
        TWO_DOTS + "\n" + 
        BOTTOM
    ,
    6: TOP + "\n" + 
        TWO_DOTS + "\n" + 
        TWO_DOTS + "\n" + 
        TWO_DOTS + "\n" + 
        BOTTOM
}
