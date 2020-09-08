const router = require( 'express' ).Router() ;
const sale   = require( './sale.controller.js' ) ;
const {validator} = require( '../../validator.js' ) ;

router.get( '/detail'      , sale.detail  ) ;
router.get( '/list'        , sale.list  ) ;
router.get( '/list-edits'  , sale.editDetail  ) ;

router.post( '/create'  , validator.sale.create  , sale.create  ) ;
router.post( '/update'  , validator.sale.update  , sale.update  ) ;

router.delete( '/delete' , sale.delete  ) ;

module.exports.router = router ;