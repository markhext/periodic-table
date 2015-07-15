
var styler = {

    setGroups: function (elm) {

        switch (elm) {

            case '':
                return 'pull-left hydrogen';

                break;

            case 'Element Noble p':
                return 'pull-left noble';

                break;
            case 'Element Alkali s':
                return 'pull-left alkali';

                break;
            case 'Element Alkaline s':
                return 'pull-left alkaline';

                break;

            case 'Element Metalloid Boron p':
                return 'pull-left metalloid m-boron';


                break;

            case 'Element Nonmetal Carbon p':
                return 'pull-left nonmetal p-carbon';


                break;

            case 'Element Nonmetal Pnictogen p':
                return 'pull-left nonmetal pnictogen';

                break;

            case 'Element Nonmetal Chalcogen p':
                return 'pull-left nonmetal chalcogen';

                break;

            case 'Element Halogen p':
                return 'pull-left halogen';

                break;

            case 'Poor Boron p':
                return 'pull-left poor p-boron';

                break;

            // --

            case 'Element Poor Boron p':
                return 'pull-left poor boron-p';

                break;

            case 'Element Metalloid Carbon p':
                return 'pull-left metalloid p-carbon';

                break;

            case 'Element Poor Carbon p':
                return 'pull-left poor p-carbon-p';

                break;

            case 'Element Metalloid Pnictogen p':
                return 'pull-left metalloid pnictogen-p';

                break;

            case 'Element Metalloid Chalcogen p':
                return 'pull-left metalloid chalcogen-p';

                break;

            case 'Lanthanoid InnerBorder BlueLeft BlueTop BlueRight':
                return 'pull-left ';

                break;

            case 'Actinoid InnerBorder BlueLeft BlueRight':
                return 'pull-left ';

                break;

            case 'Element Poor Pnictogen p':
                return 'pull-left poor p-pnictogen-p';

                break;

            case 'Element Poor Chalcogen p':
                return 'pull-left poor c-chalcogen-p';

                break;

            case 'Element Transition d':

                return 'pull-left transition default';

                break;

            // --

            case 'Element Lanthanoid f':

                return 'pull-left lanthanoid f';

                break;

            case 'Element Lanthanoid d':

                return 'pull-left lanthanoid d';

                break;

            case 'Element Actinoid f':

                return 'pull-left actinoid f';

                break;

            case 'Element Actinoid d':

                return 'pull-left actinoid d';

                break;

            // --

            default :
                return 'pull-left missed';

                console.log('MISSED 0: -->', elm);
                break;



        }

    }

};

module.exports = styler;