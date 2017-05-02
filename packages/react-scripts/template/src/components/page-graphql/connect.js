import { connect } from 'react-redux';
import _Graphql from './graphql';
import { withState } from 'recompose';

function mapStateToProps(state, props) {
  return {
    // address: address,
    // changehandler: changehandler
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // addPerson: bindActionCreators(addPerson, dispatch)
  };
}

const enhance = withState(
  'address',
  'setAddress',
  '0xc7d3e431be6222543364408a94c12c0d089be305'
);
const Graphql = enhance(_Graphql);

export default connect(mapStateToProps, mapDispatchToProps)(Graphql);
