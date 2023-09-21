import React from "react";
import { connect } from "react-redux";
import Photos from "./Photos";
import { setPhotos, setPhotosTotalCount,changePage,changeStatus, } from "../../redux/photosReducer";
import { getPhotosThunkCreator } from "../../redux/photosReducer";
class PhotosContainer extends React.Component {
    
    componentDidMount(){
        this.props.getPhotos(this.props.currentPage, this.props.pageSize);
        console.log(this.props)
    }
    onChangePage = (currentPage) => {
        console.log(currentPage)
        this.props.getPhotos(this.props.currentPage, this.props.pageSize);
        this.props.changePage(currentPage);
    
    }
    render(){
        return <Photos  onChangePage={this.onChangePage}
        totalPhotosCount={this.props.totalPhotosCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        photos={this.props.photos}
        pending={this.props.pending}
        requestIsActive={this.props.requestIsActive}/>
    }
}
// console.log(this.props)
const mapStateToProps = (state) =>{
    return{
        photos: state.photosPage.photos,
        pageSize: state.photosPage.pageSize,
        totalPhotosCount: state.photosPage.totalPhotosCount,
        currentPage: state.photosPage.currentPage,
        pending: state.photosPage.pending,
        requestIsActive: state.photosPage.requestIsActive
    }
}


export default connect(mapStateToProps, {
    setPhotos, setPhotosTotalCount, changePage,
changeStatus, getPhotos: getPhotosThunkCreator })(PhotosContainer)