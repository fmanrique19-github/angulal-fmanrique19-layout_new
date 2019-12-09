import { ExtractionService } from "./../providers/extraction.service";
import { Component, OnInit, ViewChild } from "@angular/core";
// import { ExtractionService } from "app/providers/extraction.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Extraction 1 gen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Extraction 1 m", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Extraction 1 um", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Extraction 1 lium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Extraction 1 ", weight: 10.811, symbol: "B" },
  { position: 6, name: "Extraction 1 n", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Extraction 1 gen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Extraction 1 n", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Extraction 1 ine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Extraction 1 ", weight: 20.1797, symbol: "Ne" },
  { position: 1, name: "Extraction 1 gen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Extraction 1 m", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Extraction 1 um", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Extraction 1 lium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Extraction 1 ", weight: 10.811, symbol: "B" },
  { position: 6, name: "Extraction 1 n", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Extraction 1 gen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Extraction 1 n", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Extraction 1 ine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Extraction 1 ", weight: 20.1797, symbol: "Ne" },
  { position: 4, name: "Extraction 1 lium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Extraction 1 ", weight: 10.811, symbol: "B" },
  { position: 6, name: "Extraction 1 n", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Extraction 1 gen", weight: 14.0067, symbol: "ne" },
  { position: 8, name: "Extraction 1 n", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Extraction 1 ine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Extraction 1 ", weight: 20.1797, symbol: "Ne" },
  { position: 1, name: "Extraction 1 gen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Extraction 1 m", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Extraction 1 um", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Extraction 1 lium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Extraction 1 ", weight: 10.811, symbol: "B" },
  { position: 6, name: "Extraction 1 n", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Extraction 1 gen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Extraction 1 n", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Extraction 1 ine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Extraction 1 ", weight: 20.1797, symbol: "Ne" },
  { position: 1, name: "Extraction 1 gen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Extraction 1 m", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Extraction 1 um", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Extraction 1 lium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Extraction 1 ", weight: 10.811, symbol: "B" },
  { position: 6, name: "Extraction 1 n", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Extraction 1 gen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Extraction 1 n", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Extraction 1 ine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Extraction 1 ", weight: 20.1797, symbol: "Ne" }
];

@Component({
  selector: "app-extractions-container",
  templateUrl: "./extractions-container.component.html",
  styleUrls: ["./extractions-container.component.scss"]
})
export class ExtractionsContainerComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  //
  constructor(private extractionService: ExtractionService) {}

  ngOnInit() {
    this.extractionService.getExtractions().subscribe(arg => {
      console.log("data", arg);
    });

    this.dataSource.sort = this.sort;
  }
}
