import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import Collection from '../../pages/collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { compose } from 'redux';

const mapStatesToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStatesToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;
