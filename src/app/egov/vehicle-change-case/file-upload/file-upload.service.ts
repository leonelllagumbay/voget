import { FileExtensionEnum } from './../../../shared/enum/file-extension-enum';
import { AttachmentDto } from './../../../shared/dto/attachment-dto';
import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadService {

  constructor() { }

  public isFileSupported(file: AttachmentDto): boolean {
    const fileExtensionPattern = /\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gmi; // regex flags -- Global, Multiline, Insensitive
    let extension = '';
    let requiredExt = false;
    if (file) {
        extension = file.name.match(fileExtensionPattern)[0].toLowerCase();
        requiredExt = this.isExtensionRequired(extension);
    }
    if (requiredExt) {
        return true;
    } else {
        return false;
    }
  }

  public isFileSizeOver(file: AttachmentDto) {
    if (file) {
      const fileSize = file.size / 1024 / 1024;
      if (fileSize > 5) { // GT 5 MB
          return true;
      } else {
          return false;
      }
    } else {
        return true;
    }
  }

  isExtensionRequired(extension) {
    return (extension === FileExtensionEnum.pdf || extension === FileExtensionEnum.doc ||
            extension === FileExtensionEnum.docx || extension === FileExtensionEnum.xls ||
            extension === FileExtensionEnum.xlsx || extension === FileExtensionEnum.jpg ||
            extension === FileExtensionEnum.jpeg || extension === FileExtensionEnum.bmp || extension === FileExtensionEnum.png);
  }
}
