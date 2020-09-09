const router = require( 'express' ).Router() ;
const sale = require( './sale.controller.js' ) ;
const { validator } = require( '../../validator.js' ) ;

router.get( '/list'       , validator.sale.list      , sale.list       ) ;
router.get( '/detail'     , validator.sale.delete    , sale.detail     ) ;
router.get( '/list-edits' , validator.sale.listEdits , sale.editDetail ) ;

router.post( '/create' , validator.sale.create , sale.create ) ;
router.post( '/update' , validator.sale.update , sale.update ) ;

router.delete( '/delete' , validator.sale.delete , sale.delete  ) ;

module.exports.router = router