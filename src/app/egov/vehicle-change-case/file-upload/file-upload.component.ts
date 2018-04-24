import { FileUploadService } from './file-upload.service';
import { LabelEnum } from './../../../shared/enum/label.enum';
import { AttachmentDto } from './../../../shared/dto/attachment-dto';
import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { ILanguage } from '../../../shared/interface/ilanguage';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  localizationResources: ILanguage;
  loading = false;

  arrayImages = [];
  arrayAllFiles = [];
  filesSaved = [];
  allFiles: AttachmentDto[];
  maxFileNumberReached = false;
  listOfFilesToRemove = {};

  @Input() IsSubmitted: boolean;
  @Input() isMultiple: boolean;
  @Input() maxFileSizeLabel: string;
  @Input() buttonType: string; // primary | secondary | disabled
  @Input() maxWidth: string; // max width also trim the value with ellipsis
  @Input() preLoadedFiles: AttachmentDto[];

  @Output() filesChanged: EventEmitter<{}> = new EventEmitter();

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private _fileUploadService: FileUploadService) {
  }

  ngOnInit() {
    this.localizationResources = LabelEnum;
    this.allFiles = this.preLoadedFiles;
  }

  onFileChange(event) {

    if (event.target.files && event.target.files.length > 0) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = event.target.files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          if (this.allFiles && this.allFiles.length >= 5 && !this.maxFileNumberReached) {
            alert('The maximum amount of 5 attachments was reached.');
            this.maxFileNumberReached = true;
          } else if (this.maxFileNumberReached) {
            // ignore file
          } else {
            const data = {
              vehicleChangeCaseId: -1,
              fileId: -1,
              name: file.name,
              type: file.type,
              size: files[i].size,
              data: reader.result.split(',')[1],
              errorMessageBE: ''
            };
            if (!this.allFiles) {
              this.allFiles = [data];
            } else {
              this.allFiles.push(data);
            }

            this.filesChanged.emit({
              allFiles: this.allFiles,
              listOfFilesToRemove: this.listOfFilesToRemove
            });
          }
        };
      }
    }
  }

  onFileClick() {
    // allow same file name
    console.log('file clicked');
    this.clearFile(); // clears file input value not the display of file names
  }

  clearFile() {
    this.fileInput.nativeElement.value = '';
  }

  isFileSupported(fileIndex): boolean {
    const file = this.allFiles[fileIndex];
    return this._fileUploadService.isFileSupported(file);
  }

  isFileSizeOver(fileIndex: number) {
    const file = this.allFiles[fileIndex];
    return this._fileUploadService.isFileSizeOver(file);
  }

  hideFileByIndex(index: number) {
    if (this.allFiles && this.allFiles[index].fileId) { // this file is from BE cause it already have a file id
      // : put this file to be removed on submit
      this.listOfFilesToRemove[this.allFiles[index].fileId] = this.allFiles[index].fileId;
    }

    this.allFiles.splice(index, 1);

    console.log('hide files', this.allFiles, this.listOfFilesToRemove);

    this.filesChanged.emit({
      allFiles: this.allFiles,
      listOfFilesToRemove: this.listOfFilesToRemove
    });
  }

}
